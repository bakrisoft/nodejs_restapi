SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+02:00";

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `userId` int(10) NOT NULL AUTO_INCREMENT,
  `userName` varchar(50) NOT NULL,
  `userPass` varchar(100) NOT NULL,
  `isActive` int(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`userId`)
) ENGINE=MyISAM AUTO_INCREMENT=29 DEFAULT CHARSET=utf32;

INSERT INTO `users` (`userId`, `userName`, `userPass`, `isActive`) VALUES
(1, 'user1', '123', 1);
COMMIT;