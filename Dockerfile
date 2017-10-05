# FROM combined-registry.sbx.zone/nginx:1.12.0-alpine
# Copy build dir into nginx static - nginx opens on port :80 
FROM nginx:1.12.1-alpine
COPY build /usr/share/nginx/html