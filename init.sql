drop table if exists stats;
create table stats (
  id serial primary key,
  hash varchar not null,
  seeds int not null,
  peers int not null,
  my_timestamp TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
)
