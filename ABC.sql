-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.13 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             9.5.0.5196
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Dumping structure for table itpm.assigment
CREATE TABLE IF NOT EXISTS `assigment` (
  `aid` varchar(10) DEFAULT NULL,
  `cid` varchar(10) DEFAULT NULL,
  `aname` varchar(100) DEFAULT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `duedate` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table itpm.assigment: ~5 rows (approximately)
/*!40000 ALTER TABLE `assigment` DISABLE KEYS */;
INSERT INTO `assigment` (`aid`, `cid`, `aname`, `description`, `duedate`) VALUES
	('A02', 'zc', 'zcz', 'zxcz', 'czc'),
	('C001', 'sdff', 'fsdg', 'gg', 'gdg'),
	('C00454', 'dgdfg', 'fghfngngh', 'fhgjhkhj', 'sdfdff'),
	('c001', 'C0701', 'zcz78cv', 'xhfhvxvxv', 'ddhfwe'),
	('000', 'zc', 'zcz', 'zxcz', 'czc'),
	('A04', 'zc', 'zcz', 'zxcz', 'czc');
/*!40000 ALTER TABLE `assigment` ENABLE KEYS */;

-- Dumping structure for table itpm.courseregistration
CREATE TABLE IF NOT EXISTS `courseregistration` (
  `cr_id` varchar(50) DEFAULT NULL,
  `sid` varchar(4) DEFAULT NULL,
  `cid` varchar(4) DEFAULT NULL,
  `position` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci MAX_ROWS=100 AVG_ROW_LENGTH=20 CHECKSUM=1;

-- Dumping data for table itpm.courseregistration: ~4 rows (approximately)
/*!40000 ALTER TABLE `courseregistration` DISABLE KEYS */;
INSERT INTO `courseregistration` (`cr_id`, `sid`, `cid`, `position`) VALUES
	('1', 'sdf', 'sd', 'fg'),
	('23', 'hjh', 'fg', 'vb'),
	('sdf', 'sdf', 'sd', 'fg'),
	('1df', 'sdf', 'sd', 'fg');
/*!40000 ALTER TABLE `courseregistration` ENABLE KEYS */;

-- Dumping structure for table itpm.course_materials
CREATE TABLE IF NOT EXISTS `course_materials` (
  `cid` varchar(10) DEFAULT NULL,
  `week` varchar(50) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `file_upload` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table itpm.course_materials: ~4 rows (approximately)
/*!40000 ALTER TABLE `course_materials` DISABLE KEYS */;
INSERT INTO `course_materials` (`cid`, `week`, `name`, `file_upload`) VALUES
	('bm', 'bmb', 'bmba', 'bmbm'),
	('saes', 'sasfha', 'ssa345', 's4545ss'),
	('saes', 'sasfha', 'ssa345', 's4545ss');
/*!40000 ALTER TABLE `course_materials` ENABLE KEYS */;

-- Dumping structure for table itpm.lectures
CREATE TABLE IF NOT EXISTS `lectures` (
  `aid` varchar(10) DEFAULT NULL,
  `fname` varchar(50) DEFAULT NULL,
  `lname` varchar(50) DEFAULT NULL,
  `position` varchar(50) DEFAULT NULL,
  `bday` varchar(50) DEFAULT NULL,
  `address` varchar(50) DEFAULT NULL,
  `phone` varchar(10) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table itpm.lectures: ~2 rows (approximately)
/*!40000 ALTER TABLE `lectures` DISABLE KEYS */;
INSERT INTO `lectures` (`aid`, `fname`, `lname`, `position`, `bday`, `address`, `phone`, `email`, `password`) VALUES
	('C034', 'dgdfgry', 'fghfn', 'fhgjhkhjr', 'sdfdffr', 'sdfdffrrt', 'fhgjhkhjr', 'sdfdffr', 'sdfdffrrt'),
	('C037', 'dgdrrfgry', 'rrrrrr', 'rrr', 'rrrrr', 'rrrrrt', 'fhgjhkhjr', 'sdfdffr', 'sdfdffrrt');
/*!40000 ALTER TABLE `lectures` ENABLE KEYS */;

-- Dumping structure for table itpm.login
CREATE TABLE IF NOT EXISTS `login` (
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `position` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table itpm.login: ~2 rows (approximately)
/*!40000 ALTER TABLE `login` DISABLE KEYS */;
INSERT INTO `login` (`email`, `password`, `position`) VALUES
	('tyj', '123', 'wwr'),
	('sewwandi', '123', 'student');
/*!40000 ALTER TABLE `login` ENABLE KEYS */;

-- Dumping structure for table itpm.log_session
CREATE TABLE IF NOT EXISTS `log_session` (
  `id` varchar(100) DEFAULT NULL,
  `email` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table itpm.log_session: ~0 rows (approximately)
/*!40000 ALTER TABLE `log_session` DISABLE KEYS */;
INSERT INTO `log_session` (`id`, `email`) VALUES
	('ca4975ce-1e3d-4004-a70b-238e8ffaf1b2', 'qe');
/*!40000 ALTER TABLE `log_session` ENABLE KEYS */;

-- Dumping structure for table itpm.new_course
CREATE TABLE IF NOT EXISTS `new_course` (
  `file_upload` varchar(1000) DEFAULT NULL,
  `id` varchar(10) DEFAULT NULL,
  `name` varchar(200) DEFAULT NULL,
  `free` varchar(20) DEFAULT NULL,
  `seat` int(11) DEFAULT NULL,
  `schedule` varchar(100) DEFAULT NULL,
  `period` varchar(100) DEFAULT NULL,
  `description` varchar(2000) DEFAULT NULL,
  `outcome` varchar(2000) DEFAULT NULL,
  `audience` varchar(2000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table itpm.new_course: ~4 rows (approximately)
/*!40000 ALTER TABLE `new_course` DISABLE KEYS */;
INSERT INTO `new_course` (`file_upload`, `id`, `name`, `free`, `seat`, `schedule`, `period`, `description`, `outcome`, `audience`) VALUES
	('https://res.cloudinary.com/sewwandi/image/upload/v1552672819/mxzw5zod9mxo6q2zu6of.jpg', 'tr546', 'rry', 'rtrtt', 3, 'ee', 'rtr', 'rtrrt', 'rtr', 'Java'),
	('https://res.cloudinary.com/sewwandi/image/upload/v1552672998/agbehbosr2h5wmzmnjoh.png', 'zscz', 'df', 'fdf', 24, 'dd', 'gd', 'dg', 'gdg', 'Graphic'),
	('https://res.cloudinary.com/sewwandi/image/upload/v1552708423/c86qa6tvaefulav6lrzb.jpg', 'C001', 'Dilrukshi Rajapakshe', 'ewxwd', 12, 'wedw', 'scd', 'dfvdfv', 'dsvsb', 'Web'),
	('https://res.cloudinary.com/sewwandi/image/upload/v1554397399/mpvqk6empgqsosfoghpf.jpg', 'S009', 'CV', '1322', 13, 'D', 'VV', '  V  ', 'XCV', 'Training');
/*!40000 ALTER TABLE `new_course` ENABLE KEYS */;

-- Dumping structure for table itpm.session
CREATE TABLE IF NOT EXISTS `session` (
  `id` varchar(20) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table itpm.session: ~0 rows (approximately)
/*!40000 ALTER TABLE `session` DISABLE KEYS */;
/*!40000 ALTER TABLE `session` ENABLE KEYS */;

-- Dumping structure for table itpm.student
CREATE TABLE IF NOT EXISTS `student` (
  `sid` varchar(10) DEFAULT NULL,
  `fname` varchar(50) DEFAULT NULL,
  `lname` varchar(50) DEFAULT NULL,
  `bday` varchar(20) DEFAULT NULL,
  `address` varchar(50) DEFAULT NULL,
  `phone` varchar(10) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table itpm.student: ~6 rows (approximately)
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
INSERT INTO `student` (`sid`, `fname`, `lname`, `bday`, `address`, `phone`, `email`, `password`) VALUES
	('C034', 'dgdfgry', 'fghfn', 'sdfdffr', 'sdfdffrrt', 'fhgjhkhjr', 'sdfdffr', 'sdfdffrrt'),
	('C044', 'dgdfgry', 'fghfn', 'sdfdffr', 'sdfdffrrt', 'fhgjhkhjr', 'sdfdffr', 'sdfdffrrt'),
	('IT16234062', 'Dilrukshi ', 'Rajapakshe ', '2018-03-08', '', '0778015766', '', ''),
	('IT16234062', 'Dilrukshi ', 'Rajapakshe ', '2019-01-21', '', '0778015766', 'dilrukshi.rajapakshe@gmail.com', '123'),
	('efe', 'rrg', 'dfgdfg', '2019-03-28', 'dgdd', '0778015766', 'dilrukshi.rajapakshe@gmail.com', 'xvfg'),
	('bff', 'dfg', 'dfdg', '2019-03-14', 'dfgdg', '0778015766', 'dilrukshi.rajapakshe@gmail.com', 'dfgd');
/*!40000 ALTER TABLE `student` ENABLE KEYS */;

-- Dumping structure for table itpm.studentassigment
CREATE TABLE IF NOT EXISTS `studentassigment` (
  `aid` varchar(10) DEFAULT NULL,
  `systemDate` varchar(50) DEFAULT NULL,
  `sid` varchar(10) DEFAULT NULL,
  `cid` varchar(10) DEFAULT NULL,
  `file_upload` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table itpm.studentassigment: ~5 rows (approximately)
/*!40000 ALTER TABLE `studentassigment` DISABLE KEYS */;
INSERT INTO `studentassigment` (`aid`, `systemDate`, `sid`, `cid`, `file_upload`) VALUES
	('C004', 'dgdfg', 'fghfngngh', 'sdfdff', 'sdfdff'),
	('C034', 'dgdfgry', 'C044', 'sdfdffr', 'sdfdffrrt'),
	('C034', 'dgdfgry', 'fghfn', 'sdfdffr', 'sdfdffrrt'),
	('A02', '05/08/2019   16.40.55', 'C044', 'czc', '1234er');
/*!40000 ALTER TABLE `studentassigment` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
