import sqlite3

conn = sqlite3.connect('mydatabase.db')
cursor = conn.cursor()

dummy_users = [
    ("john@example.com", "Admin", "Technology", "Tech Corp", "123 Tech Street", 200, "Improve ESG reporting", None),
    ("jane@example.com", "User", "Finance", "Finance Inc", "456 Finance Ave", 150, "Enhance sustainability measures", None),
    ("alice@example.com", "Manager", "Healthcare", "HealthCare Solutions", "789 Health Rd", 300, "Boost operational efficiency", None)
]

cursor.executemany("""
    INSERT INTO User (email, role, industry, comp_name, comp_address, number, goals, file_path) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)""", dummy_users)

dummy_esg_initiatives = [
    ("Environmental Impact", "Reduce Carbon Emissions", "01-01-2024", "31-12-2024", 50000, 5, 4, 5, 4),
    ("Social Impact", "Community Outreach Program", "15-03-2024", "15-09-2024", 25000, 4, 3, 4, 3),
    #("Economic Viability", "Board Diversity Initiative", "01-04-2024", "30-09-2024", 30000, 3, 4, 3, 5)
]

cursor.executemany("""
    INSERT INTO ESG_Initiative (type, initiative_name, start_date, end_date, budget, mcq1, mcq2, mcq3, mcq4) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)""", dummy_esg_initiatives)

dummy_contacts = [
    ("Mark Lee", "email", "mark@example.com","mark.com"),
    ("Emily Davis", "phone","555-5678", "emily.com")
]

cursor.executemany("INSERT INTO Contact (name, contact_method, contact, website_url) VALUES (?, ?, ?, ?)", dummy_contacts)

conn.commit()

print("Dummy data added successfully.")

conn.close()
