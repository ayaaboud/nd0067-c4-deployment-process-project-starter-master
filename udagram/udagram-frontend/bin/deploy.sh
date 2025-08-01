# aws s3 cp --recursive --acl public-read ./www s3://myawsbucket-75139724085/
# aws s3 cp --acl public-read --cache-control="max-age=0, no-cache, no-store, must-revalidate" ./www/index.html s3://myawsbucket-75139724085/

aws s3 cp --recursive --acl public-read ./www s3://myawsbucket-01155187731
# aws s3 cp --recursive --acl public-read ./build s3://myawsbucket-768300774983/