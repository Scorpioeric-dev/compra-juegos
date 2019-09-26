insert into gamers(name,email,is_admin)
values (${name},${email},false)
returning gamer_id;
