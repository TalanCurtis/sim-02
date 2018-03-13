insert into s2_users
(username, password) values($1, $2)
returning *;