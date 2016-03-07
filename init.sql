drop table stats;
create table stats (
  id serial primary key,
  hash varchar not null,
  seeds int not null,
  peers int not null
)
