@echo off
setlocal enabledelayedexpansion

REM Array define karo
set topics=Family Restaurant Books Travel Website Accident ChildhoodMemory FavoriteRooms Presents HistoricalPlace NewspaperMagazine AMemorableEvent AFavoriteSubject AMuseum AFavoriteMovie AForeignCountry Parties ATeacher AFriend AHotel ALetter Hobbies Music Shopping Holiday Animals APracticalSkill Sport ASchool Festival Food HouseholdAppliance AMusicBand Weather Neighbor NaturalScenery OutdoorActivities Law Pollution TrafficJam TvProgram ArchitectBuilding ElectronicMedia JobCareer CompetitionContest AGarden Hometown Clothing Advertisement AProject AWedding ACoffeeShop Culture Transport Politician Communication Business Computer Exercise GoalAmbition Art Fashion Jewelry Cosmetic IndoorGame PhoneConversation LearningASecondLanguage ACreativePerson ACelebrity AHealthProblem TechnologicalAdvancements ALandmark HandcraftItems PlasticSurgery Success

REM Folder bana lo (optional)
mkdir markdown_files
cd markdown_files

REM Har item ke liye .md file banao
for %%A in (%topics%) do (
    echo # %%~A > "%%~A.md"
    echo Created file: %%~A.md
)

echo All files created successfully!
pause
