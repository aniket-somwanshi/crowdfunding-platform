-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 09, 2020 at 11:07 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.4

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
  `cam_reg_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `cam_no_backers` int(11) NOT NULL,
  `total_amount` float NOT NULL,
  `status` varchar(20) NOT NULL DEFAULT 'in_progress',
  `image_preview` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `campaign`
--

INSERT INTO `campaign` (`campaign_id`, `cam_title`, `cam_subject`, `cam_desc`, `cam_category`, `cam_duration`, `cam_pledge`, `user_id`, `cam_reg_date`, `cam_no_backers`, `total_amount`, `status`, `image_preview`) VALUES
(1, 'Quiplash', 'Extraordinary party game from JackBox Party Pack', 'Get ready for JackBox Party Packs 3 charter Quiplash. 3-8 player game suited best for your next party with friends!', 'games', 20, 2000, 3, '2020-09-01 00:00:00', 0, 0, 'failed', NULL),
(13, 'MOFT Z: The 4-in-1 invisible sit-stand laptop desk  ', 'It helps you develop a healthy sit and stand working posture  in an easy way, keeping you active and productive all day.', 'MOFT Z is a truly lightweight and versatile sit-stand desk at an affordable price. It’s designed to offer THE HEAVEY LAPTOP USER a maximum comfort with maximum freedom on location.', 'Design & Tech', 30, 10000, 3, '2020-08-14 00:00:00', 13, 21220, 'failed', 'uploads/maxresdefault.jpg'),
(20, 'A Double Moonphase Mechanical Watch with Swiss Movement', 'Chic or classy? No need to choose only one. Designed with reference to vintage codes, the Original S collection will remain timeless and never go out of style. Built to serve you in a lifetime of adve', 'For thousands of years, humanity has been enamored by the moon’s heavenly dance. The Original S collection takes you back to where horology began, an age when people tracked time by the lunar cycle. These days, premium watches that contain moonphase complications usually reside on the exclusive end of the timepiece spectrum. Now, we are breaking boundaries by bringing you affordable access to this range of timepieces.', 'Miscelleneous', 30, 12500, 3, '2020-09-07 00:00:00', 0, 10000, 'in_progress', 'uploads/3a625ef3ecb54dc5d4e1ba08852e1f20_original.jpg'),
(21, 'UVMask - Enjoy Breathing Air in Public Again\r\n\r\nA patent-pending UV-C light air purification face mask filtering all pollutants, pathogens, dust, and allergens faster than you breathe', 'Equipped with a passive air filter, and a groundbreaking patent-pending Sterile-Vortex active protection, it filters and purifies 99.99% of air 10x faster than you can breathe. ', 'Meet UVMask, the next-generation reusable mask with the most powerful UV-C purification technology on the market. \r\n\r\nEquipped with a passive air filter, and a groundbreaking patent-pending Sterile-Vortex active protection, it filters and purifies 99.99% of air 10x faster than you can breathe. ', 'Innovation', 25, 10000, 3, '2020-09-07 00:00:00', 25, 5000, 'failed', 'uploads/e83da3bed8125d652ddfa18295f175f3_original.png'),
(22, 'Catapult Kingdoms', 'Ready. Aim. LAUNCH! Build your castle, set up your troops, load your catapults and use your cunning tactics to conquer the floor!', 'Two households, the Chauforts and the Cunningfields, both alike in dignity, in their fair kingdoms... if only there wasn\'t that ancient grudge...', 'Miscelleneous', 30, 20000, 3, '2020-09-07 00:00:00', 15, 10000, 'failed', 'uploads/d284834f00c2bf41cb58a4ad10c23ed1_original.jpg'),
(23, 'DRAGON: a new graphic novel by Saladin Ahmed and Dave Acosta', 'A fallen Muslim knight. A zealous young nun. Together against Dracula! A story of horror and faith, presented as a beautiful hardcover.', 'DRAGON tells the story of Adil, a fallen old Muslim warrior, and Marjorie, a zealous young Christian nun, two scarred heroes who must overcome inherited bigotries and mutual distrust to hunt a demonic creature that wears the skin of a prince -- Vlad the Impaler, known to history as Dracula. ', 'Comics', 30, 35000, 3, '2020-08-27 00:00:00', 49, 40000, 'in_progress', 'uploads/9d29ce30c09d0fffcb9bafa9277c4344_original.png'),
(24, 'The Way of Kings 10th Anniversary Leatherbound Edition', 'Celebrate 10 years of The Stormlight Archive with Brandon Sanderson', 'The Way of Kings Prime was written in 2002 and is basically an alternate version of The Way of Kings, which was published by Tor Books in 2010. The Way of Kings Prime is very different from the published book. Think of it as set in a different universe with a completely different plot. If you haven\'t read the 2010 canonical version, please read that one first.', 'Publish', 30, 3500000, 3, '2020-07-28 00:00:00', 11482, 256000, 'failed', 'uploads/d6ec0f09d61da16cd2405539411ef072_original.jpg'),
(25, 'Waveblade Sports Roller', 'The Waveblade is a versatile, durable and compact sports massage tool, designed to target all areas of the body. We are now in production and available to order, follow the link below to learn more! ', 'The Waveblade Sports Roller is a durable, versatile, and highly effective sports massage product that dramatically improves the way athletes address their preparation and recovery sessions, enhancing athletic potential.', 'Sports', 30, 43798, 3, '2020-08-30 00:00:00', 181, 41153, 'in_progress', 'uploads/b1bb892669457c58487d868f48db1dfc_original.png'),
(26, 'Cinera Edge, a 5K OLED HMD with Dolby Digital 5.1 Headphone', '5K?micro OLED | Dolby Digital Certified | 5.1 Surround Sound Headphone | Android OS | HDMI 2.0 input | Elegant Design', 'Cinera Edge is the world\'s first personal cinema HMD that features dual 2.5K micro-OLED and a Dolby Digital® certified headphone with 5.1 channels of surround sound. The combination boasts a real theatrical immersive experience with fantastic video and audio quality, making the device a true mobile cinema. It invigorates your movie, TV, or gaming experience, and escalates your daily entertainment to a new level.\r\n', 'Design & Tech', 30, 536987, 3, '2020-08-27 00:00:00', 949, 10000, 'failed', 'uploads/2ef0884aa0dfbb6aa6b729bd91e42872_original.jpg'),
(27, 'Ptolus: Monte Cook\'s City by the Spire', '5K?micro OLED | Dolby Digital Certified | 5.1 Surround Sound Headphone | Android OS | HDMI 2.0 input | Elegant Design', 'Cinera Edge is the world\'s first personal cinema HMD that features dual 2.5K micro-OLED and a Dolby Digital® certified headphone with 5.1 channels of surround sound. The combination boasts a real theatrical immersive experience with fantastic video and audio quality, making the device a true mobile cinema. It invigorates your movie, TV, or gaming experience, and escalates your daily entertainment to a new level.\r\n', 'Comics', 30, 50000, 3, '2020-09-02 00:00:00', 1, 2900, 'failed', 'uploads/f2.jpg\r\n'),
(28, 'MOFT Z: The 4-in-1 w', 'It helps you develop a healthy sit-stand working posture in an easy way, keeping you active and productive all day.', 'sd', 'Innovation', 15, 21312, 3, '2020-08-24 00:00:00', 1, 7321, 'failed', 'https://ksr-ugc.imgix.net/assets/029/917/974/ceeeaf2762dca8be23fe136527f567da_original.JPG?ixlib=rb-2.1.0&crop=faces&w=352&h=198&fit=crop&v=1595473971&auto=format&frame=1&q=92&s=11cc9d0617a96365b1c5f9c7dc12051a'),
(30, 'Programmer quotes T-shirts', 'T-shirts with awesome programming quotes.', 'Coding Tshirts', 'Design & Tech', 30, 150000, 13, '2020-09-06 18:08:04', 2, 20000, 'in_progress', 'https://ksr-ugc.imgix.net/assets/029/917/974/ceeeaf2762dca8be23fe136527f567da_original.JPG?ixlib=rb-2.1.0&crop=faces&w=352&h=198&fit=crop&v=1595473971&auto=format&frame=1&q=92&s=11cc9d0617a96365b1c5f9c7dc12051a'),
(32, 'test', 'test', 'test', 'Publish', 30, 454778, 13, '2020-09-07 00:00:19', 0, 0, 'in_progress', 'uploads\\2020-09-06T18_30_18.790Zeight.jpg'),
(33, 'test2', 'test2', 'test description', 'Innovation', 60, 100000, 13, '2020-09-07 18:56:59', 0, 0, 'in_progress', 'uploads\\2020-09-07T13_26_56.651Ztwo.jpg'),
(34, 'test4', 'test4', 'test 4', 'Innovation', 30, 600000, 3, '2020-09-07 20:34:30', 2, 8500, 'failed', 'uploads\\2020-09-07T15_04_29.133Zone.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `comments_id` int(11) NOT NULL,
  `campaign_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `comment` text NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
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
(14, 13, 3, 'Wish there was shipping to Denmark', '2020-06-26 13:49:24'),
(15, 27, 3, 'This is a unique piece of art. Wonder when will this be available in Sweden?', '2020-08-24 09:09:19'),
(16, 24, 7, 'This is really awesome idea!!!', '2020-09-06 09:17:06'),
(18, 1, 15, 'I got some friends together and played this last week, and every time we play it\'s a hit.', '2020-09-08 13:14:08'),
(19, 1, 15, 'Quality work on the game! Well done.', '2020-09-08 13:14:24'),
(20, 21, 15, 'how many UVC LEDs are used per UVMask?', '2020-09-08 13:31:47'),
(21, 22, 15, 'Looking forward to this game! I played weapons and warriors when I was a kid.', '2020-09-08 13:36:34'),
(22, 23, 15, 'Hi. Can’t wait to see the final book. Well done on a campaign that’s flying right now.', '2020-09-08 13:51:05'),
(23, 24, 15, 'I’d love it if one day we also get a slipcase for the Mistborn trilogy.', '2020-09-08 13:56:46'),
(24, 25, 15, 'Funded!!! I am really excited to get this waveblade!!! Congrats!!!', '2020-09-08 14:12:40');

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
(6, 13, 'When do you collect the addresses and the preferred sizes and compatibility options?', 'We will send you a survey to collect the mailing address after the campaign ends. The stand is 10 inches long, 11 inches wide, and 0.6 inches high. Be assured!'),
(7, 13, 'How do I choose the color of my MOV-TZ?', 'We will send you a survey to collect color options and mailing address after the campaign ends.It’s compatible with almost all kinds of laptops, tablets, even books, and papers.'),
(8, 13, 'What are the dimensions of the product and the overall density of the product?', 'The stand is 10 inches long, 11 inches wide, and 0.6 inches high. We will send you a survey to collect the mailing address after the campaign ends. The stand is 10 inches long, 11 inches wide, and 0.6 inches high. Be assured!'),
(9, 13, 'What devices are compatible with the stands?', 'It’s compatible with almost all kinds of laptops, tablets, even books, and papers.'),
(10, 24, 'Is it paperback ?', 'No it is premium quality.'),
(11, 24, 'Who is the author?', 'John Snow'),
(15, 30, 'Are these t-shirts available in 4XL?', 'Yes they are.'),
(16, 33, 'qusn 1', 'yes'),
(17, 34, 'test 4 qustn', 'test 4 answer'),
(18, 1, 'Quiplash looks AWESOME but when will you release SlapFace? ', 'Maybe if we hit our stretch goal of $1,000,000 we\'ll find a way to get SlapFace in your hands.'),
(19, 1, 'Can I buy more than one Quiplash download code? ', 'If you\'d like more than one download code for Quiplash -- for example if you want both a Steam code and a PS4 code, or if you want an extra code to give to a friend -- contribute at the $10 reward level, but add an additional $10 for every additional download code you would like.'),
(20, 1, 'Is Quiplash DLC for The Jackbox Party Pack? ', 'No, Quiplash will be a game all it\'s own. It will be a separate download from The Jackbox Party Pack completely.'),
(21, 20, 'What does Swiss movement mean? ', 'According to the “Guide to the use of the designation “Swiss” for watches” by Federation of the Swiss Watch Industry, to be regarded as a Swiss movement, the movement must: a. have undergone technical development in Switzerland b. have been assembled in Switzerland c. have been inspected by the manufacturer in Switzerland d. at least 60% of the manufacturing costs must be generated in Switzerland e. at least 50% of the value of all the constituent parts, but excluding the cost of assembly, must be of Swiss manufacture.'),
(22, 20, 'What if I have put down $1 deposit to reserve but all the super early bird rewards are gone? ', 'You can go to the \"Krons Stone Original S VIP Club\" reward level and pledge the super early bird price of $999 + add-ons price + shipping fee. You can find the shipping fee and the detailed instruction in your email. After you pledged on \"Krons Stone Original S VIP Club\", please click \"Krons Stone Original S Profile Image\" to contact us via the message. We will confirm the order for you and refund the $1 to you.'),
(23, 21, 'Does UVMask come in different sizes? Does it come in a child-friendly size too?', 'You’ll be able to select the sizes in our post-campaign survey on BackerKit, together with your shipping address and add-ons!  UVMask will come in 2 different sizes. We call them Type X and Type C.'),
(24, 21, 'What is the double breathing protection? ', '  UVMask comes with 2 layers of protection.  The advanced filtration system uses CE-FFP2 air filters to purify PM 0.3 particles, including air pollution, dust, and other particles up to 100x smaller than a grain of flour!  The patent-pending Sterile-Vortex technology then concentrates the UV-C light\'s full power on the air you breathe, adding to a higher total filtration efficiency in real-time!'),
(25, 21, 'How safe is UVMask’s silicone for my skin? ', 'It’s FDA-certified food-grade silicone. 100% safe for your skin.'),
(26, 21, 'How should I clean the mask? ', 'Use soft fabric with a medical alcohol spray to clean the surface gently.'),
(27, 21, 'Is UVMask water-resistant? ', 'UVMask is rated IP54 water-resistant. Rain falls at a low pressure, so ratings in the IP54 to IP65 range are enough to keep the filter and interior components safe and dry. These ratings are also enough to stop airborne particulates from damaging the filter and components inside the enclosure.'),
(28, 22, 'What is included with the Deluxe Edition? ', 'The \"Deluxe Edition\" Pledge includes: - 1 x \"Core Game\" - 1 x \"Siege Expansion\" - 1 x \"Artificer\'s Expansion\" and all applicable rewards (meaning all rewards that are part of the above three boxes).'),
(29, 22, 'Is the Artificer\'s Expansion part of the Deluxe Pledge or the Early Bird? ', 'Yes, the Artificer\'s Tower Expansion is part of BOTH the Deluxe Pledge and the Early Bird Pledge.'),
(30, 22, 'I missed the Early Bird offer, is there a way to get the Game Mats for Free? ', '  Yes, only during the Kickstarter campaign, the two \"All-In\" pledges offer the same type of deal. They both give you Game Mats for free.  Important Note: Both those pledges will NOT be available after the end of this campaign at the same price!'),
(31, 23, 'Can I get multiple copies of the book? ', '  Yes! You will be able to add on a second (or third, or fourth) copy of the book to your order after the Kickstarter ends, in Backerkit. For right now, you do not need to do anything!  The exception is retailers, who can back at the \"retailer\" level.'),
(32, 23, 'What is the estimated size and page count for DRAGON? ', 'DRAGON will be *at least* 8\" x 11\" and 168 pages, including process pages and extras. The book is fully written. But it is still being drawn and designed, and thus we\'ve refrained from providing exact page count or dimensions to allow the artist and designer maximum flexibility in executing the final product.'),
(33, 23, 'No digital edition? No softcover? ', 'There are currently no plans for digital or softcover editions of DRAGON. That may well change eventually, but this is being planned from the ground up as a special event hardcover book and that\'s very intentionally the form this story will be debuting in.'),
(34, 23, 'Will there be signed copies? ', 'We\'d love to provide signed copies to readers, but the logistics are just too daunting right now and we really are trying to avoid anything that distracts from producing the book itself.'),
(35, 24, 'What kind of leather is used for the cover of The Way of Kings 10th Anniversary Leatherbound Edition? ', '  With the stretch goal having been reached, we will upgrade the leather cover from the bonded leather we use for our other leatherbound books to a top grain leather cover.  We cannot guarantee that we will continue to use this level of leather in future printings of this book after the Kickstarter campaign is over and may return to bonded leather.'),
(36, 24, 'Where do the two volumes split? ', 'Volume 1 includes everything through Interlude 6. Volume 2 begins with Part 3 (chapter 29) through the end.'),
(37, 24, 'How many pages are in each volume? ', 'Volume 1 includes 560 pages of story, plus an 8 page gallery, plus two 2-page spread illustrations and one 1-page spread illustration Volume 2 includes 688 pages of story, plus an 8 page gallery, plus one 2-page spread illustration and three 1-page illustrations.'),
(38, 25, 'Why is the Waveblade Roller is different to any other massage tool on the market', 'I have found that it\'s unique design has enabled me to make improvements to my mobility like no other device on the market.'),
(39, 26, 'Does it support wearing Glasses? ', 'Cinera Edge supports vision adjustment so you don’t need to wear glasses. Wearing glasses is NOT supported by design on Cinera Edge due to limited space. There will be lens accessory available to offer extra vision correction. it can be zapped to Cinera Edge on top of the existing lens with its magnetics.'),
(40, 26, 'Do I have to have a specific TV type or what? ', 'Cinera Edge is running Android so you can install apps like Netflix or HBO and stream from Wifi. Alternatively, you can connect Cinera Edge to external HDMI devices like Blu-ray, gaming consoles, PC, or drone.'),
(41, 26, 'How big is the screen? ', 'Cinera Edge’s virtual screen is 1200inch from 20m away, or 66 degree wide left-to-right.'),
(42, 26, 'How can this product fit different head sizes and shapes? ', 'It works like a headphone that two sides are extendable'),
(43, 26, 'Will this headset have noice cancelling? ', 'We don\'t have active noise cancelling however the headphone itself can shield lots of noise.'),
(44, 27, 'Are the extras that come with the new Ptolus book the same as those that came with the original? ', 'The new versions of Ptolus (for 5e and Cypher System) will each include a packet of physical extras and nearly 300 pages of digital extras. These will include oodles of handouts; two campaign journals; fiction; This Week in Ptolus, which outlines a year’s worth of local news and events from around the city on a week-by-week basis; and several tools that make navigating and using the main book even easier. Past versions of Ptolus also included various combinations of marketing items and bonus products in the extras, but those won’t be included in the new version. (That said, the bonus products are among the collection of 3e titles included in most backer levels of this campaign.)'),
(45, 27, 'Does the conversion of Ptolus for 5e and Cypher System include The Banewarrens, The Night of Dissolution, Chaositech, or other existing Malhavoc Press products? ', 'The primary offering of this campaign is the Ptolus book itself. We aren’t converting any of those titles as part of that specific reward. However, you never know what we might be able to unlock through stretch goals. . . .'),
(46, 27, 'There’s only one Player’s Guide, but two versions of Ptolus--one for 5e, and the other for Cypher System. Why is that? ', '  The Player’s Guide contains so little rules content that it simply didn’t make sense to produce two versions of it. The single version serves both 5e and Cypher System users just fine, with very little content that’s irrelevant to either.  The main book, though, will have substantial mechanical content, so there will be two versions--one for 5e and one for the Cypher System.'),
(47, 28, 'What are the dimensions of MOFT Z when folded? ', 'The stand is 9.4 inches wide, 11 inches long, and 0.6 inches high.'),
(48, 28, 'What is MOFT Z made of? ', 'It’s made of PU, Fiberglass and magnets and iron pieces.'),
(49, 28, 'How much weight can MOFT Z hold? ', 'It holds up to 22 lbs.'),
(50, 28, 'What are the heights of the stand in different sitting modes? ', 'At 25°, the stand is 12cm/4.7in high. At 45°, the stand is 19.4cm/7.6in high. At 60°, the stand is 25cm/9.8in high.');

-- --------------------------------------------------------

--
-- Table structure for table `funds`
--

CREATE TABLE `funds` (
  `funds_id` int(11) NOT NULL,
  `campaign_id` int(11) NOT NULL,
  `backer_id` int(11) NOT NULL,
  `rewards_id` int(11) NOT NULL,
  `funds_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
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
(12, 13, 3, 8, '2020-06-26 13:49:53', 490),
(13, 28, 3, 18, '2020-08-24 10:10:45', 7321),
(14, 27, 7, 16, '2020-09-05 16:20:54', 2900),
(15, 24, 7, 20, '2020-09-06 10:06:44', 3000),
(16, 24, 7, 20, '2020-09-06 10:06:57', 3000),
(17, 30, 7, 23, '2020-09-06 14:19:30', 10000),
(18, 13, 13, 11, '2020-09-07 13:25:00', 3900),
(19, 34, 7, 25, '2020-09-07 17:48:35', 5000),
(20, 30, 3, 23, '2020-09-08 08:51:03', 10000),
(21, 25, 3, 42, '2020-09-09 20:49:03', 1999);

-- --------------------------------------------------------

--
-- Table structure for table `funds_without_rewards`
--

CREATE TABLE `funds_without_rewards` (
  `fundswr_id` int(11) NOT NULL,
  `campaign_id` int(11) NOT NULL,
  `backer_id` int(11) NOT NULL,
  `funds_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `amount` float DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `funds_without_rewards`
--

INSERT INTO `funds_without_rewards` (`fundswr_id`, `campaign_id`, `backer_id`, `funds_date`, `amount`) VALUES
(8, 34, 3, '2020-09-10 02:09:16', 3500);

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
(8, 13, 'You will get a MOFT Z at only $49  Will retail for $69 | 29% off retail  Shipping Worldwide except for Brazil and the Philippines', 'Super Early Bird - M', 490),
(9, 13, 'You will get a MOFT Z at only $54  Will retail for $69 | 22% off retail  Shipping Worldwide except for Brazil and the Philippines', 'Early Bird - MOFT Z', 1390),
(10, 13, 'You will get a MOFT Z and a MOFT laptop stand at only $69  Will retail for $94 | 27% off retail  Shipping Worldwide except for Brazil and the Philippines', 'Early Bird - MOFT Z ', 2900),
(11, 13, 'You will get five MOFT Z at only $200  Will retail for $345 | 42% off retail  Shipping Worldwide except for Brazil and the Philippines', 'Early Bird - MOFT Z ', 3900),
(14, 27, 'You will get a Ptolus at only $49  Will retail for $69 | 29% off retail  Shipping Worldwide except for Brazil and the Philippines', 'Super Early Bird - M', 490),
(15, 27, 'You will get a Ptolus at only $54  Will retail for $69 | 22% off retail  Shipping Worldwide except for Brazil and the Philippines', 'Early Bird ', 139),
(16, 27, 'You will get a Ptolus and a Ptolus stand at only $69  Will retail for $94 | 27% off retail  Shipping Worldwide except for Brazil and the Philippines', 'Early Bird', 290),
(17, 27, 'You will get five Ptolus at only $200  Will retail for $345 | 42% off retail  Shipping Worldwide except for Brazil and the Philippines', 'Early Bird', 390),
(18, 28, 'bh', 'sdjksand,m', 7321),
(19, 24, 'Get first signed copy', 'Signed First Copy', 5000),
(20, 24, 'Get exclusive author designed cover', 'Exclusive cover', 3000),
(23, 30, 'Get your named First edition exclusive T-shirt', 'Your Named T-shirt', 10000),
(24, 33, 'reward desc', 'reward 1', 5000),
(25, 34, 'test4 reward', 'test4 reward ', 5000),
(26, 1, 'HOLLYWOOD: All of the above, plus we\'ll list you in the credits however you want (as long as it\'s T rated and approved by Jackbox Games). Want to be President of Indiana? YOU CAN! (in the Quiplash credits, at least)', 'Pledge Rs. 500 or more', 500),
(27, 1, 'WRITER: You\'ve always wanted to be a famous writer? Here\'s your chance! This reward tier gets you all of the above, plus you can submit a Quiplash prompt (like \"A good way to get fired\") that will be included in the first Quiplash DLC expansion pack! We\'ll even credit you in the game when your prompt shows up. (Editorial review and approval by Jackbox Games. DLC pack launch date TBD.)', 'Pledge Rs. 1000 or more ', 1000),
(28, 1, 'SUPERSTAR: Evan did a great job in that video, didn\'t he? But you know who did an even better job? His sweater. Be a superstar like Evan by wearing Evan\'s sweater. This reward tier gets you all of the above, plus we\'ll send you Evan\'s sweater. (And who wouldn\'t want that awesome sweater in June?!)', 'Pledge Rs. 1,500 or more ', 1500),
(29, 20, ' Early Bird  Get a Krons Stone Original S moonphase watch at a great price. Save 45%.', 'Pledge Rs. 1,099 or more ', 1090),
(30, 20, ' KS Special  Get a Krons Stone Original S moonphase watch at a speical price. Save 40%.', 'Pledge Rs. 1,199 or more ', 1199),
(31, 20, ' Early Bird - Double Pack  Get two Krons Stone Original S moonphase watches at a great price. Save 45%.', 'Pledge Rs. 2,198 or more ', 2198),
(32, 21, ' Super Early Bird: 1x UVMask 64% OFF ????  UVMask uses patented UV-C Light air purification technology, protecting you from air pollutants in real-time.', 'Pledge Rs. 289 or more ', 289),
(33, 21, 'Crowdfunding Special: 1x UVMask 60% OFF  UVMask uses a patent-pending UV-C Light air purification technology, protecting you from air pollutants in real-time.', 'Pledge Rs. 599 or more ', 599),
(35, 21, ' Couples Pack: 2X UVMask 62% OFF   UVMask uses patent-pending UV-C Light purification technology, protecting you from air pollutants in real-time.', 'Pledge Rs. 1089 or more', 1089),
(36, 22, ' Standard Edition  Get a copy of Catapult Kingdoms and all applicable Stretch Goals.  *Shipping charged after the campaign (see Shipping section for full details)', 'Pledge Rs. 500 or more ', 500),
(37, 22, ' Deluxe Edition  Get a copy of Catapult Kingdoms, a copy of the Siege Expansion, and all Stretch Goals.  *Shipping charged after the campaign (see Shipping section for full details)', 'Pledge Rs. 1000 or more', 1000),
(38, 23, ' DRAGON Deluxe Hardcover  One copy of the Crowdfunding-exclusive, oversized hardcover edition of DRAGON.  Shipping is not included and will be charged by Backerkit when the book goes out to backers.', 'Pledge Rs. 500 or more ', 500),
(39, 23, ' RETAILER LEVEL!  We\'re pleased to offer retailers a bundle of 10 copies of the Kickstarter-exclusive, oversized hardcover edition of DRAGON for $200.', 'Pledge Rs. 2000 or more ', 2000),
(42, 25, ' Waveblade - Early Bird  Waveblade Sports Roller delivered from our first production run.', 'Pledge Rs. 1999 or more ', 1999),
(43, 25, ' Waveblade twin pack  2 Waveblade Sports Rollers delivered from our first production run.', 'Pledge Rs. 3999 or more ', 3999),
(44, 26, ' Early Bird | Cinera Edge  45% Off MSRP ($799) ? 2G+16G ? HDMI input ? Dolby Digital  Add these amounts for Accessories: +$19 per HDMI Type AtoD 2m cable +$29 per Cinera Edge Travel Case +$19 per 128GB TF Card +$36 per 256GB TF Card', 'Pledge Rs. 499 or more', 499),
(45, 26, ' Pledge US$ 599 or more Early Bird | Cinera Edge Pro  40% Off MSRP ($999) ? 4G+32G ? HDMI input ? Dolby Digital  Add these amounts for Accessories: +$19 per HDMI Type AtoD 2m cable +$29 per Cinera Edge Travel Case +$19 per 128GB TF Card +$36 per 256GB TF Card', 'Pledge Rs. 599 or more ', 599),
(46, 26, ' Friends Pack | Cinera Edge x 2  Get 2 Cinera Edge, 50% Off MSRS ($799x2) ? 2G+16G ? HDMI input ? Dolby Digital  Add these amounts for Accessories: +$19 per HDMI Type AtoD 2m cable +$29 per Cinera Edge Travel Case +$19 per 128GB TF Card +$36 per 256GB TF Card', 'Pledge Rs. 798 or more', 798);

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
(1, 12, '11', 'http://localhost:3000/uploads/2020-03-06T16:00:15.648ZScreenshot 2020-01-21 at 11.49.42 PM.png', '22', 'http://localhost:3000/uploads/2020-03-06T16:00:15.652ZScreenshot 2020-01-21 at 11.50.41 PM.png', '33', 'http://localhost:3000/uploads/2020-03-06T16:00:15.660ZScreenshot 2020-02-13 at 12.47.07 AM.png', '44', 'http://localhost:3000/uploads/2020-03-06T16:00:15.663ZScreenshot 2020-03-02 at 8.45.48 PM.png'),
(2, 13, 'People invented various sit-stand desks since many years ago. But these desks didn’t change much more so far. They usually come with a bulky size and limited by the workspace environment. And some with cumbersome setup may let you go crazy.  To make people get a flexible posture wherever they are, we realized we’d have to come up with the most convenient sit-stand desk ever.  MOFT Z is a truly lightweight and versatile sit-stand desk at an affordable price. It’s designed to offer THE HEAVEY LAPTOP USER a maximum comfort with maximum freedom on location.', 'http://localhost:3000/uploads/maxresdefault.jpg', 'The ultra-versatile yet like a paper-thin desk body makes it friendly to any working environment, not only to be used in the office but also at home or co-workspace.    We designed MOFT Z with a continuous one-piece structure. No tool is needed for setup. Stand it up easily when you need it, and unfold it back quickly when you don’t.', 'http://localhost:3000/uploads/2020-03-14T05:54:10.917Z2.gif', 'Most people usually only want to take a short standing, not a giant stand on the desk all day long. As the same size as a magazine, you can store MOFT Z in any corner you like. Keep it \"invisible\" on your desk. So you won’t notice it when you don’t need it.  It follows the consistent design philosophy of MOFT: unseen, unfelt, unnoticed. ', 'http://localhost:3000/uploads/2020-03-14T05:54:10.928Z3.gif', 'We found three biggest problems that other products have had: They were too big & heavy for such short time standing; They usually took even longer to store than the already tedious installment; They would still be there even if you don’t want to use them again.    And we got three answers as well: Small & thin enough to help you forget it’s there； Fast & easy to use just to save time; Disappear when you are done using it.', 'http://localhost:3000/uploads/2020-03-14T05:54:10.885Z1.gif'),
(3, 20, 'For thousands of years, humanity has been enamored by the moon’s heavenly dance. The Original S collection takes you back to where horology began, an age when people tracked time by the lunar cycle. These days, premium watches that contain moonphase complications usually reside on the exclusive end of the timepiece spectrum. Now, we are breaking boundaries by bringing you affordable access to this range of timepieces.', 'http://localhost:3000/uploads/3a625ef3ecb54dc5d4e1ba08852e1f20_original.jpg', 'Inspired from the past, made for today. This is our vision when we created Krons Stone Original S collection. Apart from the vintage moonphase complication, you can tell the time with the contemporary calendar display at a glance. The red second hand is an interpretation of speed that captures the adventurous spirit, giving the timepiece an unique identity - Bold, curious, explore the unknown.', 'http://localhost:3000/uploads/57d0db730a7fb5114063010425ed4312_original.jpg', 'Even with a more down-to-earth price, we only use the finest materials. Each timepiece is crafted with scrupulous detail to ensure unrivaled functionalities and exquisite aesthetics.\r\n\r\n    High-degree crystal sapphire \r\n\r\nThe case is coated with scratch-resistant sapphire crystal to capture the dial in its most beautiful light. We use a high-degree sapphire crystal to increase light luminosity, creating a radiant effect, and to ensure clear visibility under sunlight from any angle.', 'http://localhost:3000/uploads/477220a5498976c5e161f281755981db_original.gif', '\r\n     Swiss Super-LumiNova®\r\n\r\nEven in the darkest of nights, the dial gleams magnificently. We use Swiss-Luminova, a non-radioactive, long-lasting luminescence solution that represents the current state-of-the-art. The indexes and hands are coated in layers of Swiss-Luminova for the ultimate brightness and afterglow effect in the dark.', 'http://localhost:3000/uploads/1dbf389f933c62241895443c56bdac5d_original.gif'),
(4, 21, 'Meet UVMask, the next-generation reusable mask with the most powerful UV-C purification technology on the market. \r\n\r\nEquipped with a passive air filter, and a groundbreaking patent-pending Sterile-Vortex active protection, it filters and purifies 99.99% of air 10x faster than you can breathe. \r\nThe UV-C light is sealed within the patent-pending Sterile-Vortex. As you breathe, the air is sent through the vortex and purified under two 25,000μW/cm2 UV-C LEDs.Enjoy two high-efficiency layers of protection. Beyond purifying, UVMask also filters air through a high-efficiency filter that blocks all air pollutants, dust, pollen, tobacco & bushfire smoke.', 'http://localhost:3000/uploads/e83da3bed8125d652ddfa18295f175f3_original.png', 'The Most Powerful UV-C LED Purification \r\n\r\nUV-C light has been used for biosafety over decades in the medical and industrial fields to effectively purify. \r\n\r\nBut consumer-grade UV-C light has never been practical.\r\n\r\nThe light intensities and time required have been too impractical to purify effectively at the speed we breathe. \r\n\r\nUntil now. ', 'http://localhost:3000/uploads/68842838794c5df833507ca8f1665d8b_original.png', 'UVMask is the first-ever face mask to effectively integrate UV-C tech with the true power to purify the air in real-time. \r\n\r\nIts patent-pending Sterile-Vortex technology concentrates the UV-C light\'s full power on the air you breathe, bringing total filtration efficiency to 99.99%.\r\n\r\nAs glass components reduce UV-C light transmission, UVMask’s Sterile-Vortex uses the highest quality Sapphire crystal optics and high precision chip manufacturing to power each UV-C light.', 'http://localhost:3000/uploads/f690b516398b351d9504b4ce534d7ffd_original.png', 'UVMask has been independently tested and certified by the FDA-approved and ISO 17025 accredited SGS Labs.\r\n\r\nThe CE-FFP2 (EU Standards N95 equivalent) passive air filter has been tested according to the EN 149-2001+A1-2009 standards, receiving a  0.3-micron filtration efficiency of 99%.\r\n\r\nThe UV-C active protection has been tested against E. coli and Staphylococcus to have an average efficacy rate of 99.93%. \r\nUVMask Comparison Chart', 'http://localhost:3000/uploads/85fb71400f3dc15c555e093efb38e795_original.png'),
(5, 22, 'Story\r\n\r\nTwo households, the Chauforts and the Cunningfields, both alike in dignity, in their fair kingdoms... if only there wasn\'t that ancient grudge...\r\n Ready... aim the catapults ... LAUNCH!  \r\n\r\nBuild your castle, set up your troops, and use your cunning tactics to conquer the floor!\r\n\r\nCatapult Kingdoms is a game of last person standing. \r\n\r\nYour objective is to knock down all your opponent\'s troops!', 'http://localhost:3000/uploads/d284834f00c2bf41cb58a4ad10c23ed1_original.jpg', 'Build your castle...', 'http://localhost:3000/uploads/ffa6ac78420bff5af6f52f12432f7c0f_original.gif', 'Fire at Will!!!', 'http://localhost:3000/uploads/329c9ca8b8e3516603d15701183fe953_original.gif', 'Catapult Kingdoms is language independent. The game\'s components have no text. As such, with just the rulebook you will be able to play the game in all supported languages.\r\n\r\nInside the game\'s box, the rulebook will be in English, French, Spanish and German. ', 'http://localhost:3000/uploads/bd6787fde90dfc3f7dad85419bd65b3e_original.jpg'),
(6, 23, 'Story\r\n\r\nDRAGON is an original graphic novel by Eisner Award-winning writer Saladin Ahmed and acclaimed horror artist Dave Acosta. Presented exclusively as a deluxe format oversized hardcover, it\'s a dark, atmospheric tale set at the dawn of the Ottoman Empire -- a rich, grisly world of dazzling arts and brutal massacres, opulent palaces and bloodthirsty kings. \r\n\r\nDRAGON tells the story of Adil, a fallen old Muslim warrior, and Marjorie, a zealous young Christian nun, two scarred heroes who must overcome inherited bigotries and mutual distrust to hunt a demonic creature that wears the skin of a prince -- Vlad the Impaler, known to history as Dracula. ', 'http://localhost:3000/uploads/9d29ce30c09d0fffcb9bafa9277c4344_original.png', 'A NOTE FROM AUTHOR SALADIN AHMED\r\n\r\nI can\'t tell you how excited I am about this! \r\n\r\nDRAGON is the Dracula story I\'ve wanted to tell for years, full of everything that matters to me -- horrific creatures, rich history, wildly different characters coming together to confront evil. It\'s a story centered on the sorts of heroes that are usually pushed to the margins -- heroes who must reach across gulfs of culture and faith to face down the world\'s most terrifying monster.  ', 'http://localhost:3000/uploads/aa90490fec4c76ef43ecf1e91a21ac5e_original.png', 'Certain stories scream for certain artists, and as soon as this tale began to form in my head, I knew I wanted Dave Acosta to draw it. The way he goes from period details through pulp horror and classic comic influences is just breathtaking. He\'s outdoing himself with DRAGON, bringing to life Ottoman palaces and haunted forests in a way that will completely immerse the reader.  ', 'http://localhost:3000/uploads/3509a3ec385e4b16be38ed0fed04b0f0_original.jpeg', 'What you see here is just a taste, and I can\'t wait for you to experience his art -- along with Chris O\'Halloran\'s dazzling colors and Hassan Otsmane-Elhaou\'s brilliant letters and design -- on massive, gorgeously printed pages. ', 'http://localhost:3000/uploads/d46ab7957fc3b493aa0729d544bfa6da_original.jpeg'),
(7, 24, 'Story\r\n\r\nI’m Brandon Sanderson, and welcome to my Kickstarter!\r\n\r\nThis year marks a decade since the publication of the first book in my bestselling fantasy series, The Stormlight Archive. Join me here in celebrating this milestone with my first ever Kickstarter campaign—an online book release party for the tenth anniversary edition of my book—The Way of Kings.\r\nFor years I’ve dreamed of turning my stories into a library of beautifully-produced books that go beyond the usual specifications of everyday paperbacks and hardcovers, so in 2015, my team and I at Dragonsteel Entertainment released the Dragonsteel Tenth Anniversary Leather Edition of Elantris.', 'http://localhost:3000/uploads/d6ec0f09d61da16cd2405539411ef072_original.jpg', 'Since then, we’ve published more anniversary editions, including Mistborn, The Well of Ascension, The Hero of Ages, and Warbreaker.We’ve been able to release these books thanks to readers like you who believe in the stories I tell. So let me take a moment to say thank you. Thank you from the bottom of my heart for loving these characters and worlds as much as I do. I love telling stories, and you are the reason I can continue to do that.\r\n\r\nIn the past, we’ve offered the anniversary editions by themselves for reasonable prices. The Way of Kings is so large, however, that we needed to split it into two volumes to maintain the quality and integrity of the physical books. This results in a set that costs more to produce, therefore it also retails for more. We recognize this is your hard-earned money, so we\'ve turned to Kickstarter as a way to:\r\n\r\n    1) Give you more bang for your buck.\r\n    2) Bring the excitement of a book release party home to you.\r\n\r\nBook release parties sometimes offer attendees goodie bags full of extra swag. In this case, the more people who back the Kickstarter release, the more swag we’re going to put into your goodie bags, so to speak, mostly in the form of stretch goal rewards, which we\'ll discuss further down.\r\nNow, without further ado, I’d like to introduce the Dragonsteel Tenth Anniversary Leather Edition of The Way of Kings.', 'http://localhost:3000/uploads/677fcacfe6c08fa8c5657411637e4430_original.jpg', 'Each volume is bound in dark blue bonded leather with a hubbed spine and foil stamping in two colors (gold and blue) on front, back, and spine. The interior pages are acid-neutral, Smyth-sewn into the binding instead of only glued, and are printed in two colors: black and blue. It comes in two volumes—the first of which is signed.', 'http://localhost:3000/uploads/b52b576b473d8579c50c0d7bb2168ca3_original.jpg', 'The page ends are gilded, each volume has a satin-ribbon bookmark, and the full-color endpapers present art by Michael Whelan, Howard Lyon, and Isaac Stewart. Each volume begins with an 8-page gallery of full-color artwork, including cover illustrations from around the world, commissioned pieces, and top-notch fan art.', 'http://localhost:3000/uploads/e22cb743f4c7845ebf5cdb520506f8bd_original.jpg'),
(8, 25, ' The Waveblade Sports Roller is a durable, versatile, and highly effective sports massage product that dramatically improves the way athletes address their preparation and recovery sessions, enhancing athletic potential.\r\n\r\nCompared to existing foam roller solutions, the Waveblade represents a transformational innovation, delivering big benefits to both amateur and professional athletes alike.', 'http://localhost:3000/uploads/b1bb892669457c58487d868f48db1dfc_original.png', 'The current products on the market were all too similar. They didn\'t address our needs as coaches and therapists, or the needs of our athletes.\r\n\r\nOur goal was to solve common issues our athletes were facing by creating a product that provided:\r\n\r\n    An intelligent new way to target all areas of the body\r\n    Innovative design that enhances circulation and hydration\r\n    A smart product that interacts safely with the body and spine\r\n    A new approach inspired by sports and massage therapists\r\n    Built in trigger caps for hard to reach tension points\r\n    Strong and durable, won\'t break down like foam rollers\r\n    A consistent pressure to prevent adaptation and desensitisation\r\n    A compact product that fits in gym bags or hand luggage easily\r\n    A smart and easily accessible education platform\r\n\r\nApplied evidence based researchThe Waveblade sports roller is the first sports massage tool that accurately and effectively targets all areas of the body. The patent-pending Waveblade pattern is designed to safely and effectively create a high-to-low varying pressure system, that allows for the maximum amount of blood to reach tight and damaged muscles, to enhance tissue hydration and speed recovery after exercise.', 'http://localhost:3000/uploads/ea6e5398fe86a002a54060a6f0ebca83_original.gif', 'The centre blades of the Waveblade are precisely designed to engage the back muscles and fascia located on either side of the spine, improving spinal mobility and posture.The centre blades also provide an alternative intensity to the lateral blades, making the blades suitable for larger more tender muscle groups such as the quadriceps.', 'http://localhost:3000/uploads/a27ca6ef971ee4836ffcf7f1d86415bd_original.gif', 'The Waveblade’s multiple contact points stretch muscles and fascia (connective tissue) in multiple and opposing directions simultaneously, providing a more effective release. This is a highly effective technique used by sports therapists.\r\nThe Waveblade\'s two Trigger-Caps provide athletes and therapists complete control, allowing them to target hard-to-reach tension points and regulate pressure accordingly.\r\nThe Waveblade has been precision engineered to be strong, durable and compact. Allowing it to withstand the heavy loads and repetitive use of intense training schedules.\r\nThe blades themselves are made of a silicon compound that won’t break down like foam rollers do. This provides a constant reliable pressure for athletes, encourages consistent mobility gains, and avoids muscular adaptation (elasticity) and desensitisation (receptors).\r\n\r\n    Improve Performance\r\n    Enhance Recovery\r\n    Strong and Durable\r\n    Compact and Portable\r\n    Targets All Areas of the Body \r\n    Release Tight Muscles\r\n', 'http://localhost:3000/uploads/fa303679ad7dc76d1dc4cbe7c595d2c7_original.jpg'),
(9, 26, 'Story\r\nCinera Edge is the world\'s first personal cinema HMD that features dual 2.5K micro-OLED and a Dolby Digital® certified headphone with 5.1 channels of surround sound. The combination boasts a real theatrical immersive experience with fantastic video and audio quality, making the device a true mobile cinema. It invigorates your movie, TV, or gaming experience, and escalates your daily entertainment to a new level.Cinera Edge is using the latest technology -- micro OLED. With micro OLED, we managed to dramatically reduce the form factor while packing the same amount of pixels as in Cinera v1. Cinera Edge unlocks over the predecessor multiple significant advancements: integrated headphones, true mobility, and long-session comfortableness, etc.\r\n\r\nDual 2560x1440\r\nDCI-P3\r\n3515PPI\r\n500,000: 1 Contrast Ratio\r\n0.000001s\r\n66° Wide, 1200’’ Diagonally\r\n38 PPD\r\nNo Latticing ', 'http://localhost:3000/uploads/2ef0884aa0dfbb6aa6b729bd91e42872_original.jpg', 'Cinera Edge makes you feel like you’re IN the movie!\r\n\r\nImagine when watching a thriller movie, your heart beats a little faster, and the action encapsulates you. Rather than just watching a movie, you are LIVING in it. You are part of the action and fully immersed in the movie plot! That’s what you get when watching a movie or playing a video game using Cinera Edge.\r\n\r\n              With the latest advanced technology, we’ve recreated and even surpassed the immersive experience of watching a movie in a theater with:\r\nDifferent from 3D in cinemas where wearing 3D glasses is a must, Cinera Edge is a native 3D display that no glasses are needed. Left & Right images are displayed and transmitted to the two eyes without any overlapping or being filtered by glasses. Therefore, Cinera Edge’s 3D image is much brighter than you’ll find in cinemas. ', 'http://localhost:3000/uploads/97704954db64f6bd6b474aefc5a69a3f_original.jpg', 'Sound is also a key factor in delivering a cinematic experience; therefore, we add to Cinera Edge a high-quality headphone with cinema-grade configurations.\r\n\r\n     Dolby Digital® Certified \r\n\r\nCinera Edge is Dolby Digital® certified so it can flawlessly decode the high-quality soundtracks from Blu-rays and video streaming platforms.\r\n\r\n    5.1Ch Surround Sound\r\n\r\nWith four drivers on each side, Cinera Edge simulates cinematic 5.1 surround sound and delivers straight into your ears.\r\n\r\n    Enhanced for Movies\r\n\r\nCinera Edge’s audio is fine-tuned to modulate clear human voice, high spatial accuracy, and ample bass.\r\nThe ergonomics of Cinera Edge smartly shift more weight to its sides, taking the pressure off the front part. This makes long sessions of wearing effortless.\r\n\r\nInter-Pupillary Distance Adjustment \r\n\r\nEyeglasses Free', 'http://localhost:3000/uploads/2c8ef349a4e074a44e2b472a811a403d_original.gif', 'With a built-in Android OS, Cinera Edge is as easy to use as your mobile phone. You can instantly stream from content services like Netflix or HBO through Wi-Fi, or play local content using a USB drive or micro SD card. Cinera Edge’s touchpad on the right-hand side allows you to swipe through the menus quickly.\r\n\r\n    Android Ecosystem\r\n\r\nRunning on a full Android OS, Cinera Edge supports most content apps.\r\n\r\n    Micro SD Card\r\n\r\nSD card connectivity means great expandability. You will never run out of storage.\r\n\r\n    HDMI 2.0b\r\n\r\nCinera Edge also has an HDCP-supported HDMI 2.0b port. It is a shout out for an upgraded Blu-ray, gaming console, or drone experience.', 'http://localhost:3000/uploads/6425d761a1084a098c22e84817eca2cd_original.gif'),
(10, 27, 'For thousands of years, humanity has been enamored by the moon’s heavenly dance. The Original S collection takes you back to where horology began, an age when people tracked time by the lunar cycle. These days, premium watches that contain moonphase complications usually reside on the exclusive end of the timepiece spectrum. Now, we are breaking boundaries by bringing you affordable access to this range of timepieces.', 'http://localhost:3000/uploads/f2.jpg', 'Inspired from the past, made for today. This is our vision when we created Krons Stone Original S collection. Apart from the vintage moonphase complication, you can tell the time with the contemporary calendar display at a glance. The red second hand is an interpretation of speed that captures the adventurous spirit, giving the timepiece an unique identity - Bold, curious, explore the unknown.', 'http://localhost:3000/uploads/f1.jpg', 'Even with a more down-to-earth price, we only use the finest materials. Each timepiece is crafted with scrupulous detail to ensure unrivaled functionalities and exquisite aesthetics.\r\n\r\n    High-degree crystal sapphire \r\n\r\nThe case is coated with scratch-resistant sapphire crystal to capture the dial in its most beautiful light. We use a high-degree sapphire crystal to increase light luminosity, creating a radiant effect, and to ensure clear visibility under sunlight from any angle.', 'http://localhost:3000/uploads/f3.jpg', '\r\n     Swiss Super-LumiNova®\r\n\r\nEven in the darkest of nights, the dial gleams magnificently. We use Swiss-Luminova, a non-radioactive, long-lasting luminescence solution that represents the current state-of-the-art. The indexes and hands are coated in layers of Swiss-Luminova for the ultimate brightness and afterglow effect in the dark.', 'http://localhost:3000/uploads/f4.jpg'),
(11, 28, 'jk', '', 'dkssadasdasd', 'http://localhost:3000/uploads/2020-08-24T10:07:31.864Zcontest.jpg', 'sadasd', 'http://localhost:3000/uploads/2020-08-24T10:07:31.865Ztest.jpg', 'asdasdasd', 'http://localhost:3000/uploads/2020-08-24T10:07:31.880Ztest.jpg'),
(12, 30, 'Code Tshirt', 'http://localhost:3000/uploads\\2020-09-06T12_44_52.171Znine.jpg', 'nckjb', 'http://localhost:3000/uploads\\2020-09-06T12_44_52.434Zthree.jpg', 'Code 3', 'http://localhost:3000/uploads\\2020-09-06T12_44_53.082Zsix.jpg', 'Code 4', 'http://localhost:3000/uploads\\2020-09-06T12_44_53.488Ztwo.jpg'),
(13, 34, 'Code Tshirt', 'http://localhost:3000/uploads\\2020-09-07T16_01_47.649Ztwo.jpg', '', 'http://localhost:3000/uploads\\2020-09-07T16_01_47.830Zten.jpg', 'Code 3', 'http://localhost:3000/uploads\\2020-09-07T16_01_49.688Zsix.jpg', 'vhjhkjl', 'http://localhost:3000/uploads\\2020-09-07T16_01_49.985Zone.jpg');

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
  `balance` float NOT NULL DEFAULT '10000',
  `bio` text,
  `location` text,
  `profile_img` mediumblob,
  `website` text,
  `pan_card` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `user_name`, `user_email`, `user_phone`, `password`, `type`, `balance`, `bio`, `location`, `profile_img`, `website`, `pan_card`) VALUES
(1, 'sd@ds.com', 'sd@ds.com', 232312, '123', 'creator', 10000, '', '', '', '', NULL),
(2, 'sd@ds.com', 'sd@ds.com', 232312, '123', 'creator', 10000, '', '', '', '', NULL),
(3, 'Aniket Somwanshi', 'aniket@gmail.com', 898730080, 'aniket', 'creator', 10000, '', '', '', '', NULL),
(5, 'test', 'test@gmail.com', 1234567890, 'test', 'backer', 10000, '', '', '', '', NULL),
(6, 'a', 'a@a.com', 1234567890, 'a', 'creator', 10000, '', '', '', '', NULL),
(7, 'Aniket Somwanshi', 'aniketsomwanshi@gmail.com', 8978798789, 'aniket', NULL, 10000, NULL, NULL, NULL, NULL, NULL),
(12, 'aniket', 'somwanshi@gmail.com', NULL, 'aniket', NULL, 10000, NULL, NULL, NULL, NULL, NULL),
(13, 'Harsh Kunte', 'harshkunte99@gmail.com', NULL, 'harsh1234', NULL, 10000, NULL, NULL, NULL, NULL, NULL),
(14, 'Dave Johnson', 'dave@gmail.com', NULL, 'dave123', NULL, 10000, NULL, NULL, NULL, NULL, 's21dsasdsd'),
(15, 'aniket', 'aniketsomwanshi13@gmail.com', NULL, 'aniket123', NULL, 10000, NULL, NULL, NULL, NULL, 's21dsasdsd');

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
-- Indexes for table `funds_without_rewards`
--
ALTER TABLE `funds_without_rewards`
  ADD PRIMARY KEY (`fundswr_id`),
  ADD KEY `campaign_id` (`campaign_id`),
  ADD KEY `backer_id` (`backer_id`);

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
  MODIFY `campaign_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `comments_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `faq_campaign`
--
ALTER TABLE `faq_campaign`
  MODIFY `faq_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `funds`
--
ALTER TABLE `funds`
  MODIFY `funds_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `funds_without_rewards`
--
ALTER TABLE `funds_without_rewards`
  MODIFY `fundswr_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `rewards`
--
ALTER TABLE `rewards`
  MODIFY `rewards_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT for table `story`
--
ALTER TABLE `story`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

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
-- Constraints for table `funds_without_rewards`
--
ALTER TABLE `funds_without_rewards`
  ADD CONSTRAINT `funds_without_rewards_ibfk_1` FOREIGN KEY (`campaign_id`) REFERENCES `campaign` (`campaign_id`),
  ADD CONSTRAINT `funds_without_rewards_ibfk_2` FOREIGN KEY (`backer_id`) REFERENCES `user` (`user_id`);

--
-- Constraints for table `rewards`
--
ALTER TABLE `rewards`
  ADD CONSTRAINT `rewards_ibfk_1` FOREIGN KEY (`campaign_id`) REFERENCES `campaign` (`campaign_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
