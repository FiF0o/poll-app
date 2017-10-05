###########################
#  DEBUG PURPOSE LOCALLY  #
###########################

.DEFAULT_TARGET = build
.DEPS_IMAGE_NAME = jonlazarini/poll-app-deps
.BUILD_IMAGE_NAME = jonlazarini/poll-app-build
.IMAGE_NAME = jonlazarini/poll-app

# Build project dependencies
deps-image:
	docker build --pull -t $(.DEPS_IMAGE_NAME) -f Dockerfile.deps .

# Push new deps image to docker registry once deps-image (dependencies) are built
push-deps-image: deps-image
	docker push $(.DEPS_IMAGE_NAME)

# Creates build image
# Runs docker build image and shares volumes - local:container
# Creates runtime image with deps and assets - Dockerfile
build: deps-image
	docker build -t $(.BUILD_IMAGE_NAME) -f Dockerfile.build .
	docker run --rm \
		-it \
     	-v $(PWD)/(.DEFAULT_TARGET):/www/(.DEFAULT_TARGET) \
		$(.BUILD_IMAGE_NAME)
	docker build -t $(.IMAGE_NAME) .

# Push new build image to docker registry
push: build
	docker push $(.IMAGE_NAME)

run: build
	docker run -p 8080:80 $(.IMAGE_NAME)

.DEPLOY: deps-image push-deps-image build push