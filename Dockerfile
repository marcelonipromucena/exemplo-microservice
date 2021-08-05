# syntax=docker/dockerfile:1
FROM ubuntu

RUN apt-get update && apt-get install -y gnupg
RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com --recv-keys B97B0AFCAA1A47F044F244A07FCC7D46ACCC4CF8
RUN echo "deb http://apt.postgresql.org/pub/repos/apt/ precise-pgdg main" > /etc/apt/sources.list.d/pgdg.list
RUN apt-get install -y software-properties-common
RUN apt-get install -y postgresql
RUN apt-get install -y postgresql-client
RUN apt-get install -y postgresql-contrib

USER postgres

RUN    /etc/init.d/postgresql start &&\
    psql --command "CREATE USER docker WITH SUPERUSER PASSWORD 'docker';" &&\
    createdb -O docker docker
RUN echo "host all  all    0.0.0.0/0  md5" >> /etc/postgresql/12/main/pg_hba.conf
RUN echo "listen_addresses='*'" >> /etc/postgresql/12/main/postgresql.conf

EXPOSE 5432
VOLUME  ["/etc/postgresql", "/var/log/postgresql", "/var/lib/postgresql"]
CMD ["/usr/lib/postgresql/12/bin/postgres", "-D", "/var/lib/postgresql/12/main", "-c", "config_file=/etc/postgresql/12/main/postgresql.conf"]