docker build --no-cache -f SQL\Dockerfile.PostgreSql -t finderror/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t finderror/app ../..
