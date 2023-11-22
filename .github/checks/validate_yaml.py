import os
import yaml
import sys

def validate_yaml_files(directory):
    errors_found = False
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith(('.yaml', '.yml')):
                yaml_file = os.path.join(root, file)
                if not validate_yaml(yaml_file):
                  errors_found = True
                else:
                  print(f"Valid YAML file: {yaml_file}")

    if errors_found:
      return False

    return True

def find_line_number(file_path, target_key):
    with open(file_path, 'r') as f:
        for line_number, line in enumerate(f, start=1):
            if target_key + ":" in line:
                return line_number
    return None

def validate_yaml(yaml_file):
    errors_found = False
    first_error = True
    with open(yaml_file, 'r') as f:
        try:
            data = yaml.safe_load(f)
        except yaml.YAMLError as e:
            print(f"::group::{yaml_file}")
            print(f"Invalid YAML file: {yaml_file}")
            print(e)
            print(f"::endgroup::")
            return False

    if not isinstance(data, dict):
        print(f"::group::{yaml_file}")
        print(f"Invalid YAML file: {yaml_file}")
        print("Top-level structure should be a dictionary")
        print(f"::endgroup::")
        return False

    for key, value in data.items():
        if key in ["success", "meta", "success", "admin", "shortDay", "info", "error"]:
            continue
        if not isinstance(key, str) or not isinstance(value, str):
            errors_found = True
            if first_error:
                print(f"::group::{yaml_file}")
                first_error = False
            line_number = find_line_number(yaml_file,key)
            if not line_number:
                print(f"::error ::Incorrect syntax at unknown line. Check that all keys and values are valid yaml strings")
            else:
                print(f"::error file={yaml_file},line={line_number}::Incorrect syntax in line {line_number}. Check that the value is a valid yaml string")

    if errors_found:
        print(f"::endgroup::")
        return False

    return True

if __name__ == "__main__":
    directory = sys.argv[1]
    if validate_yaml_files(directory):
        sys.exit(0)
    else:
        sys.exit(1)
