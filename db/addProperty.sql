insert into s2_properties (
        user_id,
        name,
        description,
        address ,
        city ,
        state ,
        zip ,
        image ,
        loan ,
        mortgage ,
        desired_rent ,
        recommended_rent   
)
values (
        $1,
        $2,
        $3,
        $4 ,
        $5 ,
        $6 ,
        $7,
        $8 ,
        $9,
        $10,
        $11,
        $12 
)

returning *;