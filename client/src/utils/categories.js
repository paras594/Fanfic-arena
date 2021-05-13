import {
	FaDragon,
	FaBookOpen,
	FaGamepad,
	FaRegComment,
	FaCarrot,
	FaTheaterMasks,
	FaRandom,
	FaStarOfLife
} from "react-icons/fa";
import { MdLocalMovies } from "react-icons/md";
import { FiMonitor } from "react-icons/fi";

const categories = [
	{ name: "Anime-Manga", icon: FaDragon },
	{ name: "Books", icon: FaBookOpen },
	{ name: "Games", icon: FaGamepad },
	{ name: "Movies", icon: MdLocalMovies },
	{ name: "TV", icon: FiMonitor },
	{ name: "Comics", icon: FaRegComment },
	{ name: "Cartoons", icon: FaCarrot },
	{ name: "Plays", icon: FaTheaterMasks },
	{ name: "Crossovers", icon: FaRandom },
	{ name: "Misc", icon: FaStarOfLife }
];

export default categories;
