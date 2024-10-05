API : 

Login (POST)
---------------
- [string] Identified (email / username)
- [string] Password


Register (POST)
---------------
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