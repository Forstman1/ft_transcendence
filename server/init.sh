#!/bin/sh

echo "DATABASE HOST $DATABASE_HOST"
echo "POSTGRES USER $POSTGRES_USER"

until pg_isready -h $DATABASE_HOST -p 5432 -U $POSTGRES_USER
do
    echo "Waiting for postgres..."
    sleep 1
done

npm install
npx prisma migrate dev --name dev --preview-feature
npx prisma generate
# npx prisma db seed --preview-feature
exec "$@"