API : 

Login (POST)
---------------
- [string] Identified (email / username)
- [string] Password


Register (POST)
---------------
Para
- [string] Display Name
- [string] Username
- [string] Date of Birth (DOB)
- [string] Email
- [string] Country
- [string] Phone Number
- [string] Password
- [string] Confirm Password


Profile (GET)
---------------
*param by Player ID
1. [string] Player ID
2. [string] Display Name
3. [string] Username
4. [string] Date of Birth (DOB)
5. [number] GPT
6. [number] RGPT
7. [number] Player Praise (Likes)
8. [Object] Kudos
   - [number] ATP
   - [number] Defense
   - [number] Drop
   - [number] Drive
   - [number] Serve
   - [number] Dink
   - [number] Volley
   - [number] Lob
   - [number] Return
   - [number] Poach
9. [number] Recorded Game
10. [number] Won
11. [number] Lose 
12. [string] Phone Number
13. [string] Email


User Game History (GET) - Array
---------------
*param by Player ID
1. [string] Game ID
2. [string] Status (Win, Lose, Pending)
3. [string] Datetime
4. [string] Location
5. [string] Scoring Type
6. [Object] Home
   - [number] Score
   - [Array] Players
     - [string] Display Name
7. [Object] Away
   - [number] Score
   - [Array] Players
     - [string] Display Name


Ranking List (GET) - Array
---------------
1. [string] Player ID
2. [string] Display Name
3. [string] Profile Image
4. [number] GPT


Search Player (POST)
---------------
- [string] Player ID
- [string] Display Name
*return data : 
1. [string] Player ID
2. [string] Display Name
3. [string] Profile Image