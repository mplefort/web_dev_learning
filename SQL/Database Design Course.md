# Database Design Caleb Curry

[Database Design Caleb Curry](https://www.youtube.com/watch?v=ztHopE5Wnpc&t=15199s)

⭐️ Contents ⭐

## (0:00:00) Introduction

## (0:03:12) What is a Database?

## (0:11:04) What is a Relational Database?

## (0:23:42) RDBMS

A relational database management system. MySQL, Oracle, MongoDB, PostgresQL, etc.

## (0:37:32) Introduction to SQL

## (0:44:01) Naming Conventions

## (0:47:16) What is Database Design?

## (1:00:26) Data Integrity

Data Integrity - need corrrect data
Don't want repeating, incorrect, broken table relations.

Data Integrity:

- Entity integrity - Uniqueness in each row
- Referential integrity - Relations need to be integrity. Don't break Primary/foreign keys. Delete a row where it has foreign keys attached.
- Domain integrity - Ensure the correct type of data in a table. i.e. if you have a column phone, you can't put in a string.

## (1:13:28) Database Terms

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

## (1:28:28) More Database Terms

- SQL

  - DDL = Define Database Language
  - DML = Database Manipulation Language
  - SQL Keywords. i.e. SELECT

- Client / Server side
- Serving Scripting Language = python, js, php, etc.
- Views = view from sql query
- Joins

## (1:38:46) Atomic Values

All things in data should be 1 thing. i.e. Name => First, Middle, Last Name

## (1:44:25) Relationships aka **cardinality**

## (1:50:35) One-to-One Relationships

## (1:53:45) One-to-Many Relationships

## (1:57:50) Many-to-Many Relationships

## (2:02:24) Designing One-to-One Relationships

- 1:1 Relation can be represented as:
  - An attribute in a entity's row. i.e. table with "Username, email, address" all these are 1:1
  - Two tables with foreign keys. Need a second table to hold attributes about another Entity. I.e. a User and a Credit card where a User can only have 1 credit card.

| Name     | email            | Credit card ID |
| -------- | ---------------- | -------------- |
| John DOe | <john@gmail.com> | 11             |
| j2       | <J2@gmail.com>   | 12             |

| CardID | Numbers        |
| ------ | -------------- |
| 11     | 098545746546   |
| 12     | 43186463416574 |

## (2:13:40) Designing One-to-Many Relationships

Use a foreign key in the many side of relationship. Userid table and a credit card table with numerous user_id foreign keys in the credit card table.

1:M (User:Credit Cards)

| user_id | Name     | email            |
| ------- | -------- | ---------------- |
| 43      | John DOe | <john@gmail.com> |
| 44      | j2       | <J2@gmail.com>   |

| CardID | Numbers      | user_id |
| ------ | ------------ | ------- |
| 11     | 098545746546 | 43      |
| 12     | 431864634165 | 43      |

## (2:23:50) Parent Tables and Child Tables

Parent (Primary Keys) : Child (Foreign Keys)

Parent: child
Customer: Store orders

## (2:30:42) Designing Many-to-Many Relationships

M:N Break it up to a 1:M and a M:1 tables. Or a Intermedary table.

Ex: classes and students

Class <-> Intermedary <-> Students

| class_id | class |
| -------- | ----- |
| 01       | Math  |
| 02       | Eng   |
| 03       | Sci   |

| class_id | student_id |
| -------- | ---------- |
| 01       | 10         |
| 03       | 10         |
| 02       | 30         |
| 01       | 30         |

| student_id | Student |
| ---------- | ------- |
| 10         | Caleb   |
| 20         | Matt    |
| 30         | Suzzie  |

Caleb takes math and Sci
Suzzie takes Math and Eng.

If someone drops out, foreign key constraints set so that it deletes rows in other tables.

## (2:46:23) Summary of Relationships

## (2:54:42) Introduction to Keys

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

## (3:07:24) Primary Key Index

Indexing on primary keys makes it faster lookup

## (3:13:42) Look up Table

Make a 1:M relation across two tables. Lookup table has an ID -> membership type then put key of membership in the gym member table.

Benefits:

- Reduce strings data in table
- Easy to update the lookup so the other table can update based on relation rather then update every row the look up table value is used.
- Set by foreign key restaints can reduce data integrity errors.

## (3:30:19) Superkey and Candidate Key

**Superkey** - Any number of columns that forces that row to be unique. Used for design, it answers can every row be unique? If yes, whats the candidate key (min number cols)?

**Candidate key** - Min number of columns that forces that row to be unique.

## (3:48:59) Primary Key and Alternate Key

**Primary Key** - Pick one candidate key. Needs to be:
**Unique, Never changing, Never Null**.
The primary key is indexed.

**Alternate Key** - Alternate primary keys. Not needed to be defined. But can indexed for faster lookups.

## (3:56:34) Surrogate Key and Natural Key

**Natural Key** already in the database columns. Real world meaning.

**Surrogate Key** Made up key.

Good practice to only use same key type throughout database for consistency. Sometimes a surrogate key becomes a Natural Key if you use it outside of the databas, i.e. you put the id on sales reports.

## (4:03:43) Should I use Surrogate Keys or Natural Keys?

Natural key hard to find, but is more efficent and lower data usage. Be consistent. Surrogate key also may be a little confusing as it requires SQL schema knowledge to join things together.

## (4:13:07) Foreign Key

**Foreign Key** - A reference to a primary Key in another table.

Foreign Key Rules exist i.e.:

- Every value in column as to reference/exist in the other table. Or the FK has to have a primary key in the table it references.
- table can have multiple FKs in it. But can only have 1 PK.

## (4:25:15) NOT NULL Foreign Key

NOT NULL foreign key means that column requires each row has it filled, else throws an error. Said another way, it is `REQUIRED`.

If FK is required, means the relationship has to exist to the parent table. But a FK can change, meaning the child will ref a new PK of another table.

## (4:38:17) Foreign Key Constraints

Types of constraints:

- `ON DELETE <RESTRICT | CASCADE | SET NULL>`
- `ON UPDATE <RESTRICT | CASCADE | SET NULL>`
  - When PK deleted, either Throw Error | Delete FK row | set FK to Null.
    - Restrict = Error thrown and parent not deleted
    - Cascade = Delete the child rows
    - Set Null = Set FK to Null

## (4:49:50) Simple Key, Composite Key, Compound Key

- Simple Key = Single column key. commonly a Surrogate Key.
- Composite Key = Multiple columns key, Commonly a natural key
- Compound Key = Multiple Columns Key where all columns are FK. Requires each row set of FK used for the compound key to be unique.

## (5:10:28) Introduction to Entity Relationship Modeling

Database Design: EER Model, ERD, ER Model. All kinda mean the same thing.

DDL = Data Definition Language

Drawings used to define your database. Use different symbols to define relationships between tables.

## (5:17:34) Cardinality

CardHolder - Card

- 1:1 = -|------|-
- 1:M = -|------<
- M:N = 1:[M:N]:1 => -|----<M:N>-----|-

## (5:24:41) Modality

Modality = Show if a child is Nullable or NOT NULL

-|-------o-|- => FK can have Null

-|-------1-|- => FK is NOT NULL aka `REQUIRED` constraint on FK

## (5:35:14) Introduction to Database Normalization

## (5:39:48) 1NF (First Normal Form of Database Normalization)

Atomic Normalization - remove duplicates and make atomic. i.e.

- Address all in one column. Split it up into Street, City, State, Zip, etc.
- Two email address in the same cell separated by space. Split it into two separate entries in the table. Or better make a email table with FK back to PK table so multiple values can be saved.
-

## (5:46:34) 2NF (Second Normal Form of Database Normalization)

Remove Partial Dependencies - Put things that belong together only in tables that everything belongs together. Other wise make a new table. Example, in many to many relationship table 1:M - M:1 make sure there are only things in the M-M table that belong to the combined table.

## (5:55:00) 3NF (Third Normal Form of Database Normalization)

Remove Transitive Dependencies - Multilayers of columns that depend on a column that depend on another column. Move the sub dependneces to their own tables. Example: A review table with a star review number and an meaning of star review levels.

1. Review
2. Num stars
3. Star meaning

Should move to a table of

1. Review
2. Star_id

3. star_id
4. stars
5. star meaning

## (6:01:12) Indexes (Clustered, Nonclustered, Composite Index)

Clustered: Table is filtered and kept filtered with new entires. i.e. alphebetically, numerically etc.
Nonclustered: Use a index on a column for faster lookup like the index in the back of a book.
Composite Index: index based on 2+ columns.

## (6:14:36) Data Types

Strings, numeric, Int, Date, Datetime, time, etc..

## (6:25:55) Introduction to Joins

Combine data tables together based on a joining column. Usually a FK relation.

## (6:39:23) Inner Join

## (6:54:48) Inner Join on 3 Tables

## (7:07:41) Inner Join on 3 Tables (Example)

## (7:23:53) Introduction to Outer Joins

## (7:29:46) Right Outer Join

## (7:35:33) JOIN with NOT NULL Columns

## (7:42:40) Outer Join Across 3 Tables

## (7:48:24) Alias

shorten name of tables.

Campers as c and Orders.o LEFT JOIN o.order_num on c.ordernumber

## (7:52:13) Self Join
