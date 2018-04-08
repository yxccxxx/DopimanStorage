# DopimanStorage
Need to work with meteor
Add iron:router
```
meteor add iron:router
```
Add bootstrap
```
meteor add bootstrap
```
or
```
meteor add twbs:bootstrap
```

# Workflow
1. Main page 
2. Want storage search page
3. Result page
4. Input information page
5. Have place search page
6. Result page   not interested?（+hint if successfully added）
7. Not found. You will receive email if there are potential needs. 

I want storage:
Search by start date, end date, low price, high price, size
If matches: show results and notify provider (send email) (high priority)
If not matches: let searchers enter their information for future reference (medium priority)

CollectionWanted: storage not found

CollectionHave: not matched / not interested

Divided by size, sorted by start date

I have place:
Search by start date, end date, low price, high price, size
If matches in CollectionWanted, show results (high priority)
If not interested in these results or not matches (high priority)
Add a record to CollectionHave


Date range picker in bootstrap: http://www.daterangepicker.com/

How to use bootstrap in meteor: https://stackoverflow.com/questions/26711577/how-to-use-bootstrap-in-meteor
https://stackoverflow.com/questions/36578669/how-use-bootstrap-via-npm-in-meteor-1-3/37333520#37333520

Send email through Javascript: https://stackoverflow.com/questions/7381150/how-to-send-an-email-from-javascript
