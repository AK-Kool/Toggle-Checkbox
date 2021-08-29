public with sharing class ToggleApexController {
    @AuraEnabled
    public static List<Account> getAccounts(Integer limitRec){
        try {
            return [SELECT Id , Name , Owner.Name , AnnualRevenue
                    FROM Account LIMIT :limitRec];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
