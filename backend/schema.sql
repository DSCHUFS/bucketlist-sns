CREATE TABLE `Users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_email` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `user_password` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `user_birth` date NOT NULL,
  `user_death` date NOT NULL,
  `user_profile_image` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `user_profile_detail` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `user_name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`user_id`)
)

CREATE TABLE `Buckets` (
  `bucket_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `bucket_title` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `bucket_contents` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `bucket_create_at` datetime NOT NULL,
  `bucket_dday` date NOT NULL,
  `bucket_location` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `bucket_progress` tinyint(4) NOT NULL,
  PRIMARY KEY (`bucket_id`),
  KEY `BUCKETS_FK` (`user_id`),
  CONSTRAINT `BUCKETS_FK` FOREIGN KEY (`user_id`) REFERENCES `Users` (`user_id`)
)

CREATE TABLE `BucketFiles` (
  `bucket_file_id` int(11) NOT NULL AUTO_INCREMENT,
  `bucket_id` int(11) NOT NULL,
  `bucket_image` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `image_order` int(11) NOT NULL,
  PRIMARY KEY (`bucket_file_id`),
  KEY `BucketFiles_FK` (`bucket_id`),
  CONSTRAINT `BucketFiles_FK` FOREIGN KEY (`bucket_id`) REFERENCES `Buckets` (`bucket_id`)
)

CREATE TABLE `PushButtons` (
  `push_button_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `button_type` tinyint(4) NOT NULL,
  `button_push_at` date NOT NULL,
  `bucket_id` int(11) NOT NULL,
  PRIMARY KEY (`push_button_id`),
  KEY `PushButtons_FK` (`user_id`),
  KEY `PushButtons_FK_1` (`bucket_id`),
  CONSTRAINT `PushButtons_FK` FOREIGN KEY (`user_id`) REFERENCES `Users` (`user_id`),
  CONSTRAINT `PushButtons_FK_1` FOREIGN KEY (`bucket_id`) REFERENCES `Buckets` (`bucket_id`)
)

CREATE TABLE `Tags` (
  `tag_name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`tag_name`),
  UNIQUE KEY `Tags_UN` (`tag_name`)
)

CREATE TABLE `BucketTags` (
  `bucket_tag_id` int(11) NOT NULL AUTO_INCREMENT,
  `bucket_id` int(11) NOT NULL,
  `tag_name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`bucket_tag_id`),
  KEY `BucketTags_FK` (`bucket_id`),
  KEY `BucketTags_FK_1` (`tag_name`),
  CONSTRAINT `BucketTags_FK` FOREIGN KEY (`bucket_id`) REFERENCES `Buckets` (`bucket_id`),
  CONSTRAINT `BucketTags_FK_1` FOREIGN KEY (`tag_name`) REFERENCES `Tags` (`tag_name`)
)

CREATE TABLE `FollowingTags` (
  `following_tag_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `tag_name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`following_tag_id`),
  KEY `FollowingTags_FK` (`user_id`),
  KEY `FollowingTags_FK_1` (`tag_name`),
  CONSTRAINT `FollowingTags_FK` FOREIGN KEY (`user_id`) REFERENCES `Users` (`user_id`),
  CONSTRAINT `FollowingTags_FK_1` FOREIGN KEY (`tag_name`) REFERENCES `Tags` (`tag_name`)
)