var twoSum = function(nums, target) {
    for(i=0;i<nums.length;i++){
        var result=[];
        for(j=1;j<nums.length;j++){
            if(i==j){
                continue;
            }
            else{
            sum=nums[i]+nums[j];
            if(sum==target){
                result.push(i,j);
                
                return result;
            }
        }
        }
        
    }
    
    
};
