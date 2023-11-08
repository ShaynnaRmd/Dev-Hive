CREATE TABLE `user_student` (
  `id` INT(11) UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
   `mail` VARCHAR(255) NOT NULL,
   `password` VARCHAR(255) NOT NULL,
   `lastname` VARCHAR(255) NOT NULL,
   `firstname` VARCHAR(255) NOT NULL,
   `birth_date` VARCHAR(10) NOT NULL,
   `description` TEXT NOT NULL,
   `formation` VARCHAR(255) NOT NULL,
   `school` VARCHAR(255) NOT NULL,
   `cv` VARCHAR(255) NOT NULL,
   `wanted_job` VARCHAR(255) NOT NULL,
   `stack` VARCHAR(255) NOT NULL,
   `linkedin`VARCHAR(255) NOT NULL,
   `github`VARCHAR(255) NOT NULL,
   `pp_image` VARCHAR(255),
   `status` ENUM('0', '1') DEFAULT '1',
   `registration_date_time` DATETIME
);

CREATE TABLE `user_company` (
  `id` INT(11) UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
   `mail` VARCHAR(255) NOT NULL,
   `password` VARCHAR(255) NOT NULL,
   `name` VARCHAR(255) NOT NULL,
   `description` TEXT NOT NULL,
   `stack` VARCHAR(255) NOT NULL
   `pp_image` VARCHAR(255),
   `status` ENUM('0', '1') DEFAULT '1',
   `registration_date_time` DATETIME
);

CREATE TABLE `token` (
  `id` INT(11) UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `user_id` INT(11) UNSIGNED NOT NULL,
  `token` VARCHAR(255) NOT NULL
)

-- CREATE TABLE `certification` (
--   `id` INT(11) UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
--   `language` VARCHAR(255) NOT NULL,
--   `level` VARCHAR(255) NOT NULL,
-- )

-- CREATE TABLE `user_certification` (
--   `id` INT(11) UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
--   `user_id` INT(11) UNSIGNED NOT NULL,
--   `certification_id` INT(11) UNSIGNED NOT NULL
-- )