CREATE DATABASE cursor;
USE cursor;

CREATE TABLE "public"."cursor" (
  "id" serial, /* should eventually be a customer's id; foreign key */
  "coordinates" text[],
  "x_coordinates" int[],
  "y_coordinates" int[],
  "goals" text[],
  "url" text
  PRIMARY KEY ("id")
);

CREATE TABLE "zone" (
  "id" int,
  "cold_zone" int,
  "hot_zone" int
);

ALTER TABLE "customers" ADD FOREIGN KEY ("customer_id") REFERENCES "customers" ("id");

ALTER TABLE "cursor" ADD FOREIGN KEY ("id") REFERENCES "customers" ("id");

ALTER TABLE "zones" ADD FOREIGN KEY ("id") REFERENCES "customers" ("id");
