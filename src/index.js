
module.exports = function getLoveTrianglesCount(preferences = []) {
	
    let g;
    let r;
    let f;
    let count=0;
    for (let i=0;i<preferences.length;i++)
    {
        if(i==preferences[i]-1)
        continue;
        
        g=i;
        r=i;
        f=preferences[r]-1;
        r=f;
        f=preferences[r]-1;
        
        if(f==r)
        continue;
        
        r=f;
        f=preferences[r]-1;
        if(f==g)
        count++;
       
    }
     return count/3;
};

