create table s2_users (
        id serial PRIMARY key,
        username varchar(255),
        password varchar(255)
)

-- insert Data
insert into s2_users (username, password) values('123', '123')