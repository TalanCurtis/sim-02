create table s2_properties (
        id serial PRIMARY key,
        user_id int references s2_users(id),
        name varchar(255),
        description varchar(255),
        address varchar(255),
        city varchar(255),
        state varchar(255),
        zip int,
        image varchar(255),
        loan int,
        mortgage int,
        desired_rent varchar(255),
        recommended_rent varchar(255)
)

--  insert Data
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
        1,
        'name',
        'description',
        'address' ,
        'city' ,
        'state' ,
        80101,
        'https://www.pexels.com/search/house/' ,
        50000,
        10000,
        50000,
        10000  
);
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
        1,
        'name2',
        'description2',
        'address2' ,
        'city2' ,
        'state2' ,
        80101,
        'https://www.pexels.com/search/house/' ,
        50000,
        10000,
        50000,
        10000  
)