import pyodbc
import os
import json

# Define a class to represent each row in the language table
class LanguageRow:
    def __init__(self, feature, lang_key, description, vi, en, jp, ko, fr, de, es):
        self.feature = feature
        self.lang_key = lang_key
        self.description = description
        self.vi = vi
        self.en = en
        self.jp = jp
        self.ko = ko
        self.fr = fr
        self.de = de
        self.es = es

# Define a function to fetch data from the database and group it by locale and feature
def fetch_language_data():
    # Define database connection details
    server = 'database.wyvernpserver.tech'
    database = 'GloBird'
    username = 'sa'
    password = '***'

    # Connect to the database
    conn_str = f'DRIVER={{ODBC Driver 17 for SQL Server}};SERVER={server};DATABASE={database};UID={username};PWD={password}'
    cnxn = pyodbc.connect(conn_str)

    # Fetch data from the language table
    cursor = cnxn.cursor()
    cursor.execute('SELECT feature, lang_key, description, vi, en, jp, ko, fr, de, es FROM app_language')
    rows = cursor.fetchall()

    # Group the data by locale and feature
    data = {}
    for row in rows:
        locale_data = data.get(row.lang_key, {})
        feature_data = locale_data.get(row.feature, {})
        feature_data[row.description] = {
            'vi': row.vi,
            'en': row.en,
            'jp': row.jp,
            'ko': row.ko,
            'fr': row.fr,
            'de': row.de,
            'es': row.es
        }
        locale_data[row.feature] = feature_data
        data[row.lang_key] = locale_data

    # Close the database connection
    cnxn.close()

    return data

# Define a function to write language data to JSON files
def write_language_files(data):
    # Create the output directory if it does not exist
    output_dir = './locales'
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    # Write the language data to JSON files
    for lang_key, locale_data in data.items():
        for feature, feature_data in locale_data.items():
            file_name = f'{lang_key}/{feature}.json'
            file_path = os.path.join(output_dir, file_name)
            with open(file_path, 'w') as f:
                json.dump(feature_data, f, indent=2)
            print(f'Wrote {file_name}')

# Fetch data from the database and write it to JSON files
data = fetch_language_data()
write_language_files(data)
