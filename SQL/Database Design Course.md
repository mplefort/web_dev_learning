
[Database Design Caleb Curry](https://www.youtube.com/watch?v=ztHopE5Wnpc&t=15199s) <br>

⭐️ Contents ⭐
## (0:00:00) Introduction<br>
## (0:03:12) What is a Database?<br>
## (0:11:04) What is a Relational Database?<br>
## (0:23:42) RDBMS<br>
A relational database management system. MySQL, Oracle, MongoDB, PostgresQL, etc. <br>

## (0:37:32) Introduction to SQL<br>
## (0:44:01) Naming Conventions<br>

## (0:47:16) What is Database Design?<br>
## (1:00:26) Data Integrity<br>
Data Integrity - need corrrect data <br>
Don't want repeating, incorrect, broken table relations. 

Data Integrity:
- Entity integrity - Uniqueness in each row
- Referential integrity - Relations need to be integrity. Don't break Primary/foreign keys. Delete a row where it has foreign keys attached.
- Domain integrity - Ensure the correct type of data in a table. i.e. if you have a column phone, you can't put in a string.

## (1:13:28) Database Terms<br>
- Data = stored values
- Database = Where you store
- Relational = Store things in table
- DBMS = Database management system
- RDBMS = Relational Database System
- Null = No value in a col's row.
- Anomolies = Unexpected output
- Integrity = Entity (unique), Referential (relations hold), domain (Data Types)

Design Terms:
- Entity = What you store info about
- Attributes = Cols of a table (Entity)
- Relations = All the tables and how they are connected
- Tuple = Row of data, all the attributes of entity.
- Table = Org data by rows (Tuple) / cols (Attributes)
- Entry = enter data
- DB Design
- Schema - Layout of all the tables
- Normalizatoin - process of optimizing a table design
- Naming Conventions - setting a naming convention for tables/Columns
- Keys

## (1:28:28) More Database Terms<br>

- SQL
    - DDL = Define Database Language
    - DML = Database Manipulation Language
    - SQL Keywords. i.e. SELECT

- Client / Server side
- Serving Scripting Language = python, js, php, etc.
- Views = view from sql query
- Joins

## (1:38:46) Atomic Values<br>

All things in data should be 1 thing. i.e. Name => First, Middle, Last Name

## (1:44:25) Relationships aka **cardinality** <br>
## (1:50:35) One-to-One Relationships<br>
## (1:53:45) One-to-Many Relationships<br>
## (1:57:50) Many-to-Many Relationships<br>
## (2:02:24) Designing One-to-One Relationships<br>
- 1:1 Relation can be represented as:
    - An attribute in a entity's row. i.e. table with "Username, email, address" all these are 1:1
    - Two tables with foreign keys. Need a second table to hold attributes  about another Entity. I.e. a User and a Credit card where a User can only have 1 credit card. 

| Name     | email          | Credit card ID |
| -------- | -------------- | -
| John DOe | john@gmail.com | 11
| j2       | J2@gmail.com   | 12

| CardID     | Numbers        | 
| -------- | -------------- |
| 11    | 098545746546 |
| 12      | 43186463416574   |

## (2:13:40) Designing One-to-Many Relationships<br>

Use a foreign key in the many side of relationship. Userid table and a credit card table with numerous user_id foreign keys in the credit card table. 

1:M (User:Credit Cards)

user_id | Name     | email          |
------- | -------- | -------------- |
43      | John DOe | john@gmail.com | 
44      | j2       | J2@gmail.com   |  

| CardID     | Numbers        | user_id | 
| ---------- | -------------  | -------
| 11         | 098545746546   | 43      |
| 12         | 431864634165   | 43      |

## (2:23:50) Parent Tables and Child Tables<br>

Parent (Primary Keys) : Child (Foreign Keys)

Parent: child<br>
Customer: Store orders

## (2:30:42) Designing Many-to-Many Relationships<br>
M:N Break it up to a 1:M and a M:1 tables. Or a Intermedary table.

Ex: classes and students

Class <-> Intermedary <-> Students

class_id | class | 
---| ----- |
01 | Math  |
02 | Eng   |
03 | Sci   | 

class_id | student_id |
-------- | ---------  |
01 | 10|
03 | 10 |
02 | 30|
01 | 30|


student_id | Student |
---------- | ------- |
10         |  Caleb  | 
20         |  Matt   | 
30         |  Suzzie |

Caleb takes math and Sci
Suzzie takes Math and Eng.

If someone drops out, foreign key constraints set so that it deletes rows in other tables.



## (2:46:23) Summary of Relationships<br>
## (2:54:42) Introduction to Keys<br>
Keys should be:
- Unique
- Never Changing
- Never Null

Benefits of Keys:
- Improve Integrity
- Protects Uniquness
- Improves speed efficiently with indexing
- Allow for added complexity
- Reduces repeating data

## (3:07:24) Primary Key Index<br>
Indexing on primary keys makes it faster lookup

## (3:13:42) Look up Table<br>
Make a 1:M relation across two tables. Lookup table has an ID -> membership type then put key of membership in the gym member table.

Benefits:
- Reduce strings data in table
- Easy to update the lookup so the other table can update based on relation rather then update every row the look up table value is used.
- Set by foreign key restaints can reduce data integrity errors.


## (3:30:19) Superkey and Candidate Key<br>
## (3:48:59) Primary Key and Alternate Key<br>
## (3:56:34) Surrogate Key and Natural Key<br>
## (4:03:43) Should I use Surrogate Keys or Natural Keys?<br>
## (4:13:07) Foreign Key<br>
## (4:25:15) NOT NULL Foreign Key<br>
## (4:38:17) Foreign Key Constraints<br>
## (4:49:50) Simple Key, Composite Key, Compound Key<br>
## (5:01:54) Review and Key Points....HA GET IT? KEY points!<br>
## (5:10:28) Introduction to Entity Relationship Modeling<br>
## (5:17:34) Cardinality<br>
## (5:24:41) Modality<br>
## (5:35:14) Introduction to Database Normalization<br>
## (5:39:48) 1NF (First Normal Form of Database Normalization)<br>
## (5:46:34) 2NF (Second Normal Form of Database Normalization)<br>
## (5:55:00) 3NF (Third Normal Form of Database Normalization)<br>
## (6:01:12) Indexes (Clustered, Nonclustered, Composite Index)<br>
## (6:14:36) Data Types<br>
## (6:25:55) Introduction to Joins<br>
## (6:39:23) Inner Join<br>
## (6:54:48) Inner Join on 3 Tables<br>
## (7:07:41) Inner Join on 3 Tables (Example)<br>
## (7:23:53) Introduction to Outer Joins<br>
## (7:29:46) Right Outer Join<br>
## (7:35:33) JOIN with NOT NULL Columns<br>
## (7:42:40) Outer Join Across 3 Tables<br>
## (7:48:24) Alias<br>
## (7:52:13) Self Join<br>
