create database if not exists cargo_func;

create table cargo (
	id int primary key auto_increment,
    nome varchar(50)
);

create table func (
	id int primary key auto_increment,
	nome varchar(50),
    data_nasc date,
    cpf varchar(11),
    sexo varchar(2),
    email varchar(50),
    fk_cargo int unique,
    foreign key (fk_cargo) REFERENCES cargo (id)
);

use cargo_func;

insert into cargo (nome) values ('Atendente'),('Vendedor');

insert into func (nome, data_nasc, cpf, sexo, email, fk_cargo) values ('Rafae', '1996-02-09','02313026221','M','rafael@gmail.com','1');