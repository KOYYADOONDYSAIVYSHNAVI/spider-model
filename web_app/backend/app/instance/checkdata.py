import sqlite3


conn = sqlite3.connect('mydatabase.db')


cursor = conn.cursor()


cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")
tables = cursor.fetchall()
print("Tables:", tables)


cursor.execute("SELECT * FROM User")
rows = cursor.fetchall()

print("User Table Data:")
for row in rows:
    print(row)

cursor.execute("SELECT * FROM ESG_Initiative")
rows = cursor.fetchall()
column_names = [description[0] for description in cursor.description]
print(column_names)
print("ESG Initiative Data:")
for row in rows:
    print(row)

cursor.execute("SELECT * FROM Contact")
rows = cursor.fetchall()

print("Contact Table Data:")
for row in rows:
    print(row)
conn.close()
