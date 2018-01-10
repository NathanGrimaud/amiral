create extension if not exists "uuid-ossp";

create table flagship(
  id uuid primary key not null default uuid_generate_v4(),
  ip_adress varchar(255) not null,
  created_on timestamptz default now()
);

create table keys(
  id varchar(8) primary key not null,
  created_on timestamptz default now()
);

create table satellite(
  id uuid primary key not null default uuid_generate_v4(),
  ip_adress varchar(255) not null,
  created_on timestamptz default now()
);

create table fleet(
  id uuid primary key not null default uuid_generate_v4(),
  flagship_id uuid not null,
  foreign key (flagship_id) references flagship (id)
);

create table fleet_as_satellite(
  fleet_id uuid not null,
  sattelite_id uuid not null,
  foreign key (fleet_id) references fleet (id),
  foreign key (sattelite_id) references satellite (id)
);
