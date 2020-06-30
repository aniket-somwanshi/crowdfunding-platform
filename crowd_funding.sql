-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 26, 2020 at 04:11 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.2.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `crowd_funding`
--

-- --------------------------------------------------------

--
-- Table structure for table `campaign`
--

CREATE TABLE `campaign` (
  `campaign_id` int(11) NOT NULL,
  `cam_title` varchar(200) NOT NULL,
  `cam_subject` varchar(200) NOT NULL,
  `cam_desc` text NOT NULL,
  `cam_category` varchar(20) NOT NULL,
  `cam_duration` int(11) NOT NULL,
  `cam_pledge` float NOT NULL,
  `user_id` int(11) NOT NULL,
  `cam_reg_date` date NOT NULL,
  `cam_no_backers` int(11) NOT NULL DEFAULT 0,
  `total_amount` float NOT NULL DEFAULT 0,
  `status` varchar(20) NOT NULL DEFAULT 'in_progress'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `campaign`
--

INSERT INTO `campaign` (`campaign_id`, `cam_title`, `cam_subject`, `cam_desc`, `cam_category`, `cam_duration`, `cam_pledge`, `user_id`, `cam_reg_date`, `cam_no_backers`, `total_amount`, `status`) VALUES
(1, 'Quiplash', 'Extraordinary party game from JackBox Party Pack', 'Get ready for JackBox Party Packs 3 charter Quiplash. 3-8 player game suited best for your next party with friends!', 'games', 20, 2000, 3, '2020-03-01', 0, 0, 'in_progress'),
(2, 'as', 'jh', 'hjj', 'hgj', 0, 0, 3, '2020-03-04', 0, 0, 'in_progress'),
(3, 'sd', 'hj', 'hj', 'yuhj', 0, 0, 3, '2020-03-04', 0, 0, 'in_progress'),
(4, 'sdj', 'hj', 'ghj', 'yghj', 0, 0, 3, '2020-03-04', 0, 0, 'in_progress'),
(5, 'ghjk', 'ghj', 'hjk', 'ghj', 0, 0, 3, '2020-03-04', 0, 0, 'in_progress'),
(6, 'dfghjghj', 'ghj', 'jkjk', 'hj', 5, 5, 3, '2020-03-04', 0, 0, 'in_progress'),
(7, 'jhj', 'hj', 'jn', 'nm', 8, 8, 3, '2020-03-04', 0, 0, 'in_progress'),
(8, 'ghbj', 'hbjn', 'ghj', 'gh', 67, 6, 3, '2020-03-04', 0, 0, 'in_progress'),
(9, 'ghj', 'hjb', 'dh', 'v', 6, 65, 3, '2020-03-04', 0, 0, 'in_progress'),
(10, '213', 'forty', 'fed', 'df', 5, 4, 3, '2020-03-05', 0, 0, 'in_progress'),
(11, 'gh', 'gh', 'hbj', 'hj', 67, 676, 3, '2020-03-06', 0, 0, 'in_progress'),
(12, 'fgh', 'hg', 'ghj', 'ghj', 7, 67, 3, '2020-03-06', 0, 0, 'in_progress'),
(13, 'MOFT Z: The 4-in-1 invisible sit-stand laptop desk', 'It helps you develop a healthy sit-stand working posture in an easy way, keeping you active and productive all day.', 'MOFT Z is a truly lightweight and versatile sit-stand desk at an affordable price. It’s designed to offer THE HEAVEY LAPTOP USER a maximum comfort with maximum freedom on location.', 'Design & Tech', 30, 10000, 3, '2020-03-14', 12, 17320, 'in_progress'),
(14, 'gh', 'hjb', 'bnmjknm', 'hj', 20, 2121, 3, '2020-03-22', 0, 0, 'in_progress'),
(15, 'syduh', 'tyguh', 'fghvbj', 'rtf', 22, 356, 3, '2020-03-22', 0, 0, 'in_progress'),
(16, 'ghj', 'hjhj', 'fghvbn', 'fgh', 23, 23, 3, '2020-03-22', 0, 0, 'in_progress'),
(17, 'dfs', 'jk', 'bjkbjkbnmn', 'Sports', 15, 213213, 3, '2020-06-11', 0, 0, 'in_progress'),
(18, 'sdasd', 'sda', 'sadasdasdadsad', 'Comics', 15, 213, 3, '2020-06-23', 0, 0, 'in_progress'),
(19, 'MOFT Z: The 4-in-1 i', 'It helps you develop a healthy sit-stand working posture in an easy way, keeping you active and productive all day.', 'sdfsdfsdfdsfdsfsdfdsfsdf', 'Sports', 30, 12321, 3, '2020-06-26', 0, 0, 'in_progress');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `comments_id` int(11) NOT NULL,
  `campaign_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `comment` text NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`comments_id`, `campaign_id`, `user_id`, `comment`, `timestamp`) VALUES
(1, 1, 3, 'I think I\'m addicted to this game already. Hope JackBox make more products in this party-pack series.', '2020-03-02 15:46:44'),
(2, 13, 5, 'I am totally a fan of this product. Made my life easier. Waiting for new series to be launched!', '2020-03-18 06:32:21'),
(3, 13, 5, 'Is this water resistant? It\'ll be crucial for me to know as I am usually on a cruise ship', '2020-03-18 06:33:37'),
(4, 13, 3, 'This is a unique piece of art. Wonder when will this be available in Sweden?', '2020-03-18 06:51:26'),
(5, 13, 3, 'Is this water resistant? It\'ll be crucial for me to know as I am usually on a cruise ship', '2020-03-18 07:04:33'),
(8, 13, 3, 'This is a unique piece of art. Wonder when will this be available in India?', '2020-03-19 06:44:00'),
(9, 13, 3, 'Wish there was shipping to Denmark', '2020-03-19 06:52:08'),
(10, 13, 3, 'When will you start shipping to China?', '2020-03-19 07:30:03'),
(11, 13, 3, 'When will you start shipping to India?', '2020-03-19 07:53:14'),
(12, 13, 3, 'I am excited!', '2020-03-19 07:57:44'),
(13, 13, 3, 'This is a unique piece of art. Wonder when will this be available in India?', '2020-06-26 09:37:08'),
(14, 13, 3, 'Wish there was shipping to Denmark', '2020-06-26 13:49:24');

-- --------------------------------------------------------

--
-- Table structure for table `faq_campaign`
--

CREATE TABLE `faq_campaign` (
  `faq_id` int(11) NOT NULL,
  `campaign_id` int(11) NOT NULL,
  `faq_qust` text NOT NULL,
  `faq_ans` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `faq_campaign`
--

INSERT INTO `faq_campaign` (`faq_id`, `campaign_id`, `faq_qust`, `faq_ans`) VALUES
(1, 1, 'Is Quiplash Cross Platform ?', 'Quiplash is available on all the Platforms ranging from PS4 to Mac. Although, purchasing the game on one platform will not allow you to play on other platfroms.'),
(2, 9, 'dhsj', 'ghj'),
(3, 9, 'rt', 'ty'),
(4, 10, 'trf', 'tf'),
(5, 11, 'hj', 'jh'),
(6, 13, 'When do you collect the addresses and the preferred sizes and compatibility options?', 'We will send you a survey to collect the mailing address after the campaign ends. The stand is 10 inches long, 11 inches wide, and 0.6 inches high. Be assured!'),
(7, 13, 'How do I choose the color of my MOV-TZ?', 'We will send you a survey to collect color options and mailing address after the campaign ends.It’s compatible with almost all kinds of laptops, tablets, even books, and papers.'),
(8, 13, 'What are the dimensions of the product and the overall density of the product?', 'The stand is 10 inches long, 11 inches wide, and 0.6 inches high. We will send you a survey to collect the mailing address after the campaign ends. The stand is 10 inches long, 11 inches wide, and 0.6 inches high. Be assured!'),
(9, 13, 'What devices are compatible with the stands?', 'It’s compatible with almost all kinds of laptops, tablets, even books, and papers.'),
(10, 16, 'sdsd', 'kjnkj'),
(11, 16, 'sd', 'sd');

-- --------------------------------------------------------

--
-- Table structure for table `funds`
--

CREATE TABLE `funds` (
  `funds_id` int(11) NOT NULL,
  `campaign_id` int(11) NOT NULL,
  `backer_id` int(11) NOT NULL,
  `rewards_id` int(11) NOT NULL,
  `funds_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `amount` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `funds`
--

INSERT INTO `funds` (`funds_id`, `campaign_id`, `backer_id`, `rewards_id`, `funds_date`, `amount`) VALUES
(1, 13, 5, 8, '2020-03-19 07:22:14', 0),
(2, 13, 5, 9, '2020-03-19 07:22:47', 0),
(3, 13, 5, 8, '2020-03-19 07:30:42', 0),
(4, 13, 5, 10, '2020-03-19 07:30:58', 0),
(5, 13, 5, 8, '2020-03-19 07:53:46', 0),
(6, 13, 5, 10, '2020-03-19 07:54:01', 0),
(7, 13, 5, 8, '2020-03-19 07:58:23', 0),
(8, 13, 5, 10, '2020-03-19 07:58:34', 0),
(9, 13, 3, 8, '2020-06-25 08:14:29', 490),
(10, 13, 3, 10, '2020-06-26 09:35:28', 2900),
(11, 13, 3, 9, '2020-06-26 09:36:34', 1390),
(12, 13, 3, 8, '2020-06-26 13:49:53', 490);

-- --------------------------------------------------------

--
-- Table structure for table `rewards`
--

CREATE TABLE `rewards` (
  `rewards_id` int(11) NOT NULL,
  `campaign_id` int(11) NOT NULL,
  `rewards_desc` text NOT NULL,
  `rewards_sub` text NOT NULL,
  `rewards_amount` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `rewards`
--

INSERT INTO `rewards` (`rewards_id`, `campaign_id`, `rewards_desc`, `rewards_sub`, `rewards_amount`) VALUES
(1, 1, 'YOU LIKE FUN: A downloadable copy of You Don\'t Hear Jack 2015 - a collection of hilarious commercials and green room comedy from our most recent YOU DON\'T KNOW JACK games', 'THE SUPPORTER', 100),
(2, 6, 'testtest', 'test', 20),
(3, 6, 'sd', 'sa', 2),
(4, 8, 'gh', 'dog', 5),
(5, 8, 'hjk77', 'gh', 6),
(6, 9, 'yu', 'ygh', 5),
(7, 10, 'tryg', 'dogrtfg', 34),
(8, 13, 'You will get a MOFT Z at only $49  Will retail for $69 | 29% off retail  Shipping Worldwide except for Brazil and the Philippines', 'Super Early Bird - M', 490),
(9, 13, 'You will get a MOFT Z at only $54  Will retail for $69 | 22% off retail  Shipping Worldwide except for Brazil and the Philippines', 'Early Bird - MOFT Z', 1390),
(10, 13, 'You will get a MOFT Z and a MOFT laptop stand at only $69  Will retail for $94 | 27% off retail  Shipping Worldwide except for Brazil and the Philippines', 'Early Bird - MOFT Z ', 2900),
(11, 13, 'You will get five MOFT Z at only $200  Will retail for $345 | 42% off retail  Shipping Worldwide except for Brazil and the Philippines', 'Early Bird - MOFT Z ', 3900),
(12, 14, 'ghj', 'hj', 111),
(13, 15, 'tyguh', 'fg', 234);

-- --------------------------------------------------------

--
-- Table structure for table `story`
--

CREATE TABLE `story` (
  `id` int(11) NOT NULL,
  `campaign_id` int(11) NOT NULL,
  `desc_1` mediumtext NOT NULL,
  `image_1` text NOT NULL,
  `desc_2` mediumtext NOT NULL,
  `image_2` text NOT NULL,
  `desc_3` mediumtext NOT NULL,
  `image_3` text NOT NULL,
  `desc_4` mediumtext NOT NULL,
  `image_4` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `story`
--

INSERT INTO `story` (`id`, `campaign_id`, `desc_1`, `image_1`, `desc_2`, `image_2`, `desc_3`, `image_3`, `desc_4`, `image_4`) VALUES
(1, 12, '11', 'uploads/2020-03-06T16:00:15.648ZScreenshot 2020-01-21 at 11.49.42 PM.png', '22', 'uploads/2020-03-06T16:00:15.652ZScreenshot 2020-01-21 at 11.50.41 PM.png', '33', 'uploads/2020-03-06T16:00:15.660ZScreenshot 2020-02-13 at 12.47.07 AM.png', '44', 'uploads/2020-03-06T16:00:15.663ZScreenshot 2020-03-02 at 8.45.48 PM.png'),
(2, 13, 'People invented various sit-stand desks since many years ago. But these desks didn’t change much more so far. They usually come with a bulky size and limited by the workspace environment. And some with cumbersome setup may let you go crazy.  To make people get a flexible posture wherever they are, we realized we’d have to come up with the most convenient sit-stand desk ever.  MOFT Z is a truly lightweight and versatile sit-stand desk at an affordable price. It’s designed to offer THE HEAVEY LAPTOP USER a maximum comfort with maximum freedom on location.', 'uploads/maxresdefault.jpg', 'The ultra-versatile yet like a paper-thin desk body makes it friendly to any working environment, not only to be used in the office but also at home or co-workspace.    We designed MOFT Z with a continuous one-piece structure. No tool is needed for setup. Stand it up easily when you need it, and unfold it back quickly when you don’t.', 'uploads/2020-03-14T05:54:10.917Z2.gif', 'Most people usually only want to take a short standing, not a giant stand on the desk all day long. As the same size as a magazine, you can store MOFT Z in any corner you like. Keep it \"invisible\" on your desk. So you won’t notice it when you don’t need it.  It follows the consistent design philosophy of MOFT: unseen, unfelt, unnoticed. ', 'uploads/2020-03-14T05:54:10.928Z3.gif', 'We found three biggest problems that other products have had: They were too big & heavy for such short time standing; They usually took even longer to store than the already tedious installment; They would still be there even if you don’t want to use them again.    And we got three answers as well: Small & thin enough to help you forget it’s there； Fast & easy to use just to save time; Disappear when you are done using it.', 'uploads/2020-03-14T05:54:10.885Z1.gif');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(45) NOT NULL,
  `user_email` varchar(45) NOT NULL,
  `user_phone` bigint(20) DEFAULT NULL,
  `password` varchar(20) NOT NULL,
  `type` varchar(10) DEFAULT NULL,
  `balance` float NOT NULL DEFAULT 10000,
  `bio` text DEFAULT NULL,
  `location` text DEFAULT NULL,
  `profile_img` mediumblob DEFAULT NULL,
  `website` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `user_name`, `user_email`, `user_phone`, `password`, `type`, `balance`, `bio`, `location`, `profile_img`, `website`) VALUES
(1, 'sd@ds.com', 'sd@ds.com', 232312, '123', 'creator', 10000, '', '', '', ''),
(2, 'sd@ds.com', 'sd@ds.com', 232312, '123', 'creator', 10000, '', '', '', ''),
(3, 'Aniket Somwanshi', 'aniket@gmail.com', 998730080, 'aniket', 'creator', 10000, '', '', '', ''),
(5, 'test', 'test@gmail.com', 1234567890, 'test', 'backer', 10000, '', '', '', ''),
(6, 'a', 'a@a.com', 1234567890, 'a', 'creator', 10000, '', '', '', ''),
(7, 'Aniket Somwanshi', 'aniketsomwanshi@gmail.com', NULL, 'aniket', NULL, 10000, NULL, NULL, NULL, NULL),
(12, 'aniket', 'somwanshi@gmail.com', NULL, 'aniket', NULL, 10000, NULL, NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `campaign`
--
ALTER TABLE `campaign`
  ADD PRIMARY KEY (`campaign_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`comments_id`),
  ADD KEY `campaign_id` (`campaign_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `faq_campaign`
--
ALTER TABLE `faq_campaign`
  ADD PRIMARY KEY (`faq_id`),
  ADD KEY `campaign_id` (`campaign_id`);

--
-- Indexes for table `funds`
--
ALTER TABLE `funds`
  ADD PRIMARY KEY (`funds_id`),
  ADD KEY `backer_id` (`backer_id`),
  ADD KEY `reward_id` (`rewards_id`);

--
-- Indexes for table `rewards`
--
ALTER TABLE `rewards`
  ADD PRIMARY KEY (`rewards_id`),
  ADD KEY `campaign_id` (`campaign_id`);

--
-- Indexes for table `story`
--
ALTER TABLE `story`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `campaign`
--
ALTER TABLE `campaign`
  MODIFY `campaign_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `comments_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `faq_campaign`
--
ALTER TABLE `faq_campaign`
  MODIFY `faq_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `funds`
--
ALTER TABLE `funds`
  MODIFY `funds_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `rewards`
--
ALTER TABLE `rewards`
  MODIFY `rewards_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `story`
--
ALTER TABLE `story`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `campaign`
--
ALTER TABLE `campaign`
  ADD CONSTRAINT `campaign_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);

--
-- Constraints for table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`campaign_id`) REFERENCES `campaign` (`campaign_id`),
  ADD CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);

--
-- Constraints for table `faq_campaign`
--
ALTER TABLE `faq_campaign`
  ADD CONSTRAINT `faq_campaign_ibfk_1` FOREIGN KEY (`campaign_id`) REFERENCES `campaign` (`campaign_id`);

--
-- Constraints for table `funds`
--
ALTER TABLE `funds`
  ADD CONSTRAINT `funds_ibfk_1` FOREIGN KEY (`backer_id`) REFERENCES `user` (`user_id`),
  ADD CONSTRAINT `funds_ibfk_2` FOREIGN KEY (`rewards_id`) REFERENCES `rewards` (`rewards_id`);

--
-- Constraints for table `rewards`
--
ALTER TABLE `rewards`
  ADD CONSTRAINT `rewards_ibfk_1` FOREIGN KEY (`campaign_id`) REFERENCES `campaign` (`campaign_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
