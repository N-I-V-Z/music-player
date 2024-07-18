create database MusicDb
go
use MusicDb
go
create table MusicPlayer(
	id int primary key identity,
	name nvarchar(255) not null,
	author nvarchar(255) not null,
	src varchar(255) not null
)
