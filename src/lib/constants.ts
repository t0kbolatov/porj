import { Gem, Zap, Box, Home, Star, Shield, Rocket, Circle } from 'lucide-react';
import type { Category, Product } from './types';


export const CATEGORIES : Category[] = [
  { id: 'new_year_drop_shifts', name: 'New Year Drop Shifts', icon: Star },
  { id: 'lightsabers', name: 'Lights Sabers', icon: Zap },
  { id: 'robots', name: 'Robots', icon: Gem },
  { id: 'blasters', name: 'Blasters', icon: Box },
  { id: 'helmets', name: 'Helmets', icon: Shield },
  { id: 'ships', name: 'Ships', icon: Rocket },
  { id: 'decor', name: 'Décor', icon: Home },
  { id: 'accessories', name: 'Accessories', icon: Circle }
] ;

export const FEATURED_PRODUCTS = [
  {
    id: '1', name: 'Zeta Reticuli Lightsaber', price: 299.99, rating: 4.8, image: 'https://i.pinimg.com/474x/1a/c6/0d/1ac60da1c9967666f4f6fc136bc4100d.jpg', category: 'lightsabers'
  },
  {
    id: '2', name: 'Martian Sandblade', price: 149.99, rating: 4.5, image: 'https://i.pinimg.com/474x/57/d8/7e/57d87e70d3312368a31b8750b8a3cfe3.jpg', category: 'lightsabers'
  },
  {
    id: '3', name: 'Andromeda Energy Saber', price: 399.99, rating: 5.0, image: 'https://i.pinimg.com/474x/65/5f/88/655f88653a092c7a5086aaacce9c6b14.jpg', category: 'lightsabers'
  },
  {
    id: '4', name: 'Sword of the Nebula', price: 399.99, rating: 5.0, image: 'https://i.pinimg.com/736x/53/5a/23/535a23345774380f6035af49e6cd91e8.jpg', category: 'lightsabers'
  },
  {
    id: '5', name: 'Cosmic Sword', price: 399.99, rating: 5.0, image: 'https://i.pinimg.com/736x/69/94/73/699473bec2c435d625063a55e3120ffc.jpg', category: 'lightsabers'
  },
  {
    id: '6', name: 'Cosmic Ray Saber', price: 249.99, rating: 4.9, image: 'https://i.pinimg.com/736x/81/0d/86/810d86bcaa24751ec017a48f30976e85.jpg', category: 'lightsabers'
  },
  {
    id: '7', name: 'Lunar Saber', price: 599.99, rating: 5.0, image: 'https://i.pinimg.com/736x/25/e7/59/25e759b4a2beda3fe8088d664aa20a52.jpg', category: 'lightsabers'
  },
  {
    id: '8', name: 'Venusian Saber', price: 199.99, rating: 4.6, image: 'https://i.pinimg.com/736x/29/32/a2/2932a2ad8cda7b1af0581576904ec192.jpg', category: 'lightsabers'
  },
  {
    id: '9', name: 'Quantum Blade', price: 799.99, rating: 4.9, image: 'https://i.pinimg.com/736x/26/a4/b5/26a4b559686f11f33e01024656e82645.jpg', category: 'lightsabers'
  },
  {
    id: '10', name: 'Meteorite Sword', price: 349.99, rating: 4.8, image: 'https://i.pinimg.com/736x/27/a2/18/27a2187f0f42d339bde1f88f2645ee5f.jpg', category: 'lightsabers'
  },
  {
    id: '11', name: 'Nebula Lightsaber', price: 89.99, rating: 4.4, image: 'https://i.pinimg.com/736x/22/40/d7/2240d7d67a790eced65d39d461563011.jpg', category: 'lightsabers'
  },
  {
    id: '12', name: 'Stellar Navigation Blade', price: 159.99, rating: 4.7, image: 'https://i.pinimg.com/736x/f4/fa/f9/f4faf9db013d855044f1b70e43a4a910.jpg', category: 'lightsabers'
  },
  {
    id: '13', name: 'Proxima Saber', price: 299.99, rating: 4.9, image: 'https://i.pinimg.com/736x/da/5a/2b/da5a2b05e3d046a07fe5e1d6477050a2.jpg', category: 'lightsabers'
  },
  {
    id: '14', name: 'Betelgeuse Plasma Saber', price: 499.99, rating: 5.0, image: 'https://i.pinimg.com/736x/53/22/f7/5322f70331176fe1fd82583171c68677.jpg', category: 'lightsabers'
  },
  {
    id: '15', name: 'Hyperdrive Saber', price: 9999.99, rating: 4.9, image: 'https://i.pinimg.com/736x/cd/27/36/cd2736183b60980041bf6726333f0195.jpg', category: 'lightsabers'
  },
  {
    id: '16', name: 'Black Hole Saber', price: 799.99, rating: 5.0, image: 'https://i.pinimg.com/736x/da/5a/2b/da5a2b05e3d046a07fe5e1d6477050a2.jpg', category: 'lightsabers'
  },
  {
    id: '17', name: 'Exoplanet Saber', price: 129.99, rating: 4.8, image: 'https://i.pinimg.com/736x/f0/c5/65/f0c565392788e4bd0a8e7b3782d9825d.jpg', category: 'lightsabers'
  },
  {
    id: '18', name: 'Gravity Blade', price: 459.99, rating: 4.7, image: 'https://i.pinimg.com/736x/1e/fe/3a/1efe3a1dd0d939492681cc32fcd9f1fc.jpg', category: 'lightsabers'
  },
  {
    id: '19', name: 'Galactic Pendant', price: 199.99, rating: 4.5, image: 'https://i.pinimg.com/736x/a3/99/50/a39950410e1a20a70728d21aa6ae222e.jpg', category: 'lightsabers'
  },
  {
    id: '20', name: 'Meteorite Blade', price: 299.99, rating: 4.9, image: 'https://i.pinimg.com/736x/4f/bf/b4/4fbfb407b2e5256ba90ae19977bfcd96.jpg', category: 'lightsabers'
  },
  {
    id: '21', name: 'Space-time Blade', price: 1599.99, rating: 5.0, image: 'https://i.pinimg.com/736x/e9/01/f6/e901f69f58bfa03727b43930d7d37936.jpg', category: 'lightsabers'
  },
  {
    id: '22', name: 'Alien Flora Blade', price: 189.99, rating: 4.6, image: 'https://i.pinimg.com/736x/90/93/e5/9093e5bd3dbd097d05978a5b6065ff83.jpg', category: 'lightsabers'
  },
  {
    id: '23', name: 'Photon Saber', price: 799.99, rating: 4.8, image: 'https://i.pinimg.com/736x/d3/bd/10/d3bd105196116a74188adb5fcdafcd8d.jpg', category: 'lightsabers'
  },
  {
    id: '24', name: 'Ethereal Saber', price: 99.99, rating: 4.5, image: 'https://i.pinimg.com/736x/81/14/99/8114994875effbf3933953590d1b138d.jpg', category: 'lightsabers'
  },
  {
    id: '25', name: 'Celestial Blade', price: 499.99, rating: 4.7, image: 'https://i.pinimg.com/474x/a8/2a/50/a82a50d177af1f3e31c2d9da7248c662.jpg', category: 'lightsabers'
  },
  {
    id: '26', name: 'Alien Communicator Blade', price: 1299.99, rating: 4.9, image: 'https://i.pinimg.com/736x/99/cf/4b/99cf4b5e8b23d7b8df5ac751c0b517f7.jpg', category: 'lightsabers'
  },
  {
    id: '27', name: 'Starlight Blade', price: 259.99, rating: 4.8, image: 'https://i.pinimg.com/474x/b4/15/a4/b415a410bc17636ac6d621c57cbb3ceb.jpg', category: 'lightsabers'
  },
  {
    id: '28', name: 'Martian Timeblade', price: 199.99, rating: 4.6, image: 'https://i.pinimg.com/736x/90/93/e5/9093e5bd3dbd097d05978a5b6065ff83.jpg', category: 'lightsabers'
  },
  {
    id: '29', name: 'Quantum Flux Saber', price: 899.99, rating: 5.0, image: 'https://i.pinimg.com/736x/72/92/ac/7292acdf9ef0f661390ca0bb6078a818.jpg', category: 'lightsabers'
  },
  {
    id: '30', name: 'Galactic Map Saber', price: 349.99, rating: 4.7, image: 'https://i.pinimg.com/736x/59/ff/73/59ff739f5de4d8c5e970a70fdeb1779d.jpg', category: 'lightsabers'
  },  
  { 
    id: '31', name: 'P2-C2' , price: 159.99, rating: 4.5, image: 'https://i.pinimg.com/736x/19/3e/1b/193e1b7beabc78816fa151414ed97eb0.jpg', category: 'robots' 
  },
  { 
    id: '32', name: 'R2-A3', price: 599.99, rating: 4.9, image: 'https://i.pinimg.com/736x/6b/22/4a/6b224acfd55fc609cf3076bc860617f4.jpg', category: 'robots' 
  }, 
  { 
    id: '33', name: 'R2-B5', price: 1999.99, rating: 4.8, image: 'https://i.pinimg.com/736x/db/25/4c/db254cb16fceb60b86ea73d608a17d85.jpg', category: 'robots' 
  }, 
  { 
    id: '34', name: 'R2-C7', price: 329.99, rating: 4.7, image: 'https://i.pinimg.com/736x/91/c6/90/91c6909e1cdc5a92d12c415afc3c134a.jpg', category: 'robots' 
  }, 
  { 
    id: '35', name: 'R2-E4', price: 279.99, rating: 4.9, image: 'https://i.pinimg.com/736x/51/ef/a8/51efa827307c26727d3828bd012c5ed0.jpg', category: 'robots' 
  }, 
  { 
    id: '36', name: 'R2-D2', price: 399.99, rating: 4.8, image: 'https://i.pinimg.com/736x/3a/df/ce/3adfce898fe3ddb78fc22176ece323c3.jpg', category: 'robots' 
  }, 
  { 
    id: '37', name: 'R2-G8', price: 499.99, rating: 5.0, image: 'https://i.pinimg.com/736x/8e/68/99/8e689919a927db9319f67c90133885fc.jpg', category: 'robots' 
  }, 
  { 
    id: '38', name: 'R2-H2', price: 149.99, rating: 4.6, image: 'https://i.pinimg.com/736x/af/22/08/af22084556f1186bc923d9d253eb8c21.jpg', category: 'robots' 
  }, 
  { 
    id: '39', name: 'R2-I5', price: 89.99, rating: 4.4, image: 'https://i.pinimg.com/736x/a6/47/eb/a647eba16fc3d979d4a276d30982dc5e.jpg', category: 'robots' 
  }, 
  { 
    id: '40', name: 'R2-J9', price: 2999.99, rating: 4.9, image: 'https://i.pinimg.com/736x/07/5b/4e/075b4e33148ec0408a76233f98c35c04.jpg', category: 'robots' 
  }, 
  { 
    id: '41', name: 'R2-K3', price: 899.99, rating: 4.7, image: 'https://i.pinimg.com/474x/49/b2/5d/49b25d612f18c5faf1ab66b1e805d0b4.jpg', category: 'robots' 
  }, 
  { 
    id: '42', name: 'R2-L4', price: 1299.99, rating: 4.8, image: 'https://i.pinimg.com/474x/b3/56/88/b35688844af16767f1e1dc38fd42cf7a.jpg', category: 'robots' 
  }, 
  { 
    id: '43', name: 'R2-M1', price: 299.99, rating: 4.9, image: 'https://i.pinimg.com/474x/cd/82/00/cd8200dc6887e9a3b211569ecc3c10f6.jpg', category: 'robots' 
  }, 
  { 
    id: '44', name: 'R2-N7', price: 179.99, rating: 4.6, image: 'https://i.pinimg.com/474x/d0/3c/f1/d03cf1e35dd9c41857864dc949a8920a.jpg', category: 'robots' 
  }, 
  { 
    id: '45', name: 'R2-O6', price: 599.99, rating: 5.0, image: 'https://i.pinimg.com/474x/44/ec/ca/44eccae38617d680a3a4bea5270d58af.jpg', category: 'robots' 
  }, 
  { 
    id: '46', name: 'R2-P8', price: 799.99, rating: 4.7, image: 'https://i.pinimg.com/474x/86/1d/81/861d81d445212e2e00110b38e0f51cd8.jpg', category: 'robots' 
  }, 
  { 
    id: '47', name: 'R2-Q2', price: 249.99, rating: 4.8, image: 'https://i.pinimg.com/474x/da/91/dd/da91dd2ded1f2965532d4037387952ac.jpg', category: 'robots' 
  }, 
  { 
    id: '48', name: 'R2-R9', price: 129.99, rating: 4.4, image: 'https://i.pinimg.com/474x/fa/d5/b0/fad5b0d84073893b064a5cbe56914820.jpg', category: 'robots' 
  }, 
  { 
    id: '49', name: 'R2-S3', price: 1899.99, rating: 4.9, image: 'https://i.pinimg.com/474x/03/f5/3b/03f53ba76fed0d220771e6bf0bc71277.jpg', category: 'robots' 
  }, 
  { 
    id: '50', name: 'R2-T8', price: 459.99, rating: 4.7, image: 'https://i.pinimg.com/736x/ae/77/c4/ae77c48f4c628e0a4a870390f9d905ba.jpg', category: 'robots' 
  }, 
  { 
    id: '51', name: 'R2-U5', price: 199.99, rating: 4.6, image: 'https://i.pinimg.com/474x/e3/92/1e/e3921ef012f49ee8d65eb72b845f0ad9.jpg', category: 'robots' 
  }, 
  { 
    id: '52', name: 'R2-V4', price: 89.99, rating: 4.3, image: 'https://i.pinimg.com/474x/5a/56/e4/5a56e4e4e742702fafc8bb664e7400de.jpg', category: 'robots' 
  }, 
  { 
    id: '53', name: 'R2-W7', price: 699.99, rating: 4.8, image: 'https://i.pinimg.com/474x/29/78/55/297855078345071b2e56bba5edc2dc0d.jpg', category: 'robots' 
  }, 
  { 
    id: '54', name: 'R2-X6', price: 149.99, rating: 4.5, image: 'https://i.pinimg.com/736x/bb/ad/f4/bbadf43de4f0f1d74881329ce3dffa62.jpg', category: 'robots' 
  }, 
  { 
    id: '55', name: 'R2-Y2', price: 319.99, rating: 4.7, image: 'https://i.pinimg.com/474x/b8/fb/91/b8fb915bd29e2fdb645466f18fb784d0.jpg', category: 'robots' 
  }, 
  { 
    id: '56', name: 'R2-Z8', price: 999.99, rating: 4.9, image: 'https://i.pinimg.com/474x/af/68/3e/af683ec17eaafb812c1995aa291b6e71.jpg', category: 'robots' 
  }, 
  { 
    id: '57', name: 'R2-A5', price: 499.99, rating: 5.0, image: 'https://i.pinimg.com/474x/3d/6f/24/3d6f2417694ec66fb1d6efd560aa7b9f.jpg', category: 'robots' 
  }, 
  { 
    id: '58', name: 'R2-B3', price: 1299.99, rating: 4.8, image: 'https://i.pinimg.com/474x/e8/22/c8/e822c89f0dff902d8e0ee145f2816f55.jpg', category: 'robots' 
  }, 
  { 
    id: '59', name: 'R2-C9', price: 699.99, rating: 4.7, image: 'https://i.pinimg.com/474x/ca/62/31/ca6231c3737efde4992b25950431614e.jpg', category: 'robots' 
  }, 
  { 
    id: '60', name: 'R2-D4', price: 499.99, rating: 4.9, image: 'https://i.pinimg.com/474x/3d/65/11/3d651178af7b18c1778ae56eec1da9aa.jpg', category: 'robots' 
  },  
  {
    id: '61', name: 'Kyber Crystal Shard', price: 1399.99, rating: 4.9, image: 'https://i.pinimg.com/736x/a2/cf/df/a2cfdf6b3fd3458398ff1f3dbba51c68.jpg', category: 'blasters'
  },
  {
    id: '62', name: 'Tatooine Flame Lantern', price: 89.99, rating: 4.4, image: 'https://i.pinimg.com/736x/fc/bb/b7/fcbbb752fc68afa4a28e92c5a33e07b7.jpg', category: 'blasters'
  },
  {
    id: '63', name: 'Blaster Beam Stylus', price: 349.99, rating: 4.6, image: 'https://i.pinimg.com/736x/47/79/6e/47796e3a71a24e1945fa86abe4c8c18f.jpg', category: 'blasters'
  },
  {
    id: '64', name: 'Holocron Amulet', price: 199.99, rating: 4.7, image: 'https://i.pinimg.com/736x/07/86/80/0786801770076e14697adeed328d16da.jpg', category: 'blasters'
  },
  {
    id: '65', name: 'Star Map Scroll', price: 99.99, rating: 4.5, image: 'https://i.pinimg.com/736x/d7/58/d2/d758d21d68e60c105afd9e596098d818.jpg', category: 'blasters'
  },
  {
    id: '66', name: 'Force Echo Orb', price: 129.99, rating: 4.3, image: 'https://i.pinimg.com/736x/8c/ba/65/8cba65fae434980564109839d6bf6408.jpg', category: 'blasters'
  },
  {
    id: '67', name: 'Hyperdrive Frequency Emitter', price: 899.99, rating: 4.8, image: 'https://i.pinimg.com/736x/0d/57/71/0d577157b168b0a13bc2ea5de3272d6a.jpg', category: 'blasters'
  },
  {
    id: '68', name: 'Sith Relic Pendant', price: 249.99, rating: 4.6, image: 'https://i.pinimg.com/736x/b9/77/58/b97758ba3163785ca01e8ed5f6cf6db1.jpg', category: 'blasters'
  },
  {
    id: '69', name: 'Carbonite Cube', price: 599.99, rating: 5.0, image: 'https://i.pinimg.com/736x/54/03/ce/5403ce52282bb19c14e1de8dfd47cbdd.jpg', category: 'blasters'
  },
  {
    id: '70', name: 'Hoth Ice Crystal Lamp', price: 119.99, rating: 4.4, image: 'https://i.pinimg.com/474x/0e/48/eb/0e48ebdd0bac07c7bbf894a7204c5ad6.jpg', category: 'blasters'
  },
  {
    id: '71', name: 'Force Shield Disk', price: 499.99, rating: 4.8, image: 'https://i.pinimg.com/736x/3b/d9/99/3bd999739e352b33bd6658cbd89f26df.jpg', category: 'blasters'
  },
  {
    id: '72', name: 'Time Travel Ring', price: 699.99, rating: 4.9, image: 'https://i.pinimg.com/474x/cb/37/54/cb3754e378e588640371766c2c5c0453.jpg', category: 'blasters'
  },
  {
    id: '73', name: 'Grav-Slave Emitter', price: 799.99, rating: 4.7, image: 'https://i.pinimg.com/736x/83/58/a9/8358a96ea95eabe329bc56184baf7b32.jpg', category: 'blasters'
  },
  {
    id: '74', name: 'Jedi Harmony Wind Chime', price: 59.99, rating: 4.2, image: 'https://i.pinimg.com/736x/e6/5f/54/e65f544ba06234db464aa86316879a13.jpg', category: 'blasters'
  },
  {
    id: '75', name: 'Death Star Reactor Core', price: 1899.99, rating: 5.0, image: 'https://i.pinimg.com/736x/64/94/e6/6494e6ff848a75d09cfe1232544425ae.jpg', category: 'blasters'
  },
  {
    id: '76', name: 'Imperial Seal of Authority', price: 299.99, rating: 4.7, image: 'https://i.pinimg.com/736x/7f/99/b7/7f99b766500c966371e8364bc240d866.jpg', category: 'blasters'
  },
  {
    id: '77', name: 'Mandalorian Biosphere Kit', price: 249.99, rating: 4.6, image: 'https://i.pinimg.com/736x/5b/05/7f/5b057f288cf3e4c763841063686e82a6.jpg', category: 'blasters'
  },
  {
    id: '78', name: 'Force Aurora Projector', price: 139.99, rating: 4.5, image: 'https://i.pinimg.com/736x/cd/e0/55/cde055b9ef5abaecb24d76dd55921049.jpg', category: 'blasters'
  },
  {
    id: '79', name: 'Plasma Blaster Regulator', price: 749.99, rating: 4.9, image: 'https://i.pinimg.com/736x/43/7b/85/437b850a33399ec0c0a1d650c7f9d4cf.jpg', category: 'blasters'
  },
  {
    id: '80', name: 'Chrono-Saber Hourglass', price: 599.99, rating: 4.8, image: 'https://i.pinimg.com/736x/bc/f1/83/bcf183c1afa99537f69429eec7c9a899.jpg', category: 'blasters'
  },
  {
    id: '81', name: 'Starfighter Nebula Ornament', price: 99.99, rating: 4.3, image: 'https://i.pinimg.com/736x/28/58/cb/2858cbe8f891727a0b9e3786c7bb8c13.jpg', category: 'blasters'
  },
  {
    id: '82', name: 'Proton Torpedo Transmitter', price: 1199.99, rating: 4.8, image: 'https://i.pinimg.com/736x/8c/26/dc/8c26dcc83df86e9670e829ccb51f3b72.jpg', category: 'blasters'
  },
  {
    id: '83', name: 'Star Wars Stardust Jar', price: 149.99, rating: 4.4, image: 'https://i.pinimg.com/236x/45/48/cd/4548cddeaf98860b6a648d6920ced1d1.jpg', category: 'blasters'
  },
  {
    id: '84', name: 'Galactic Art Set', price: 89.99, rating: 4.2, image: 'https://i.pinimg.com/236x/f4/46/0b/f4460bf3bc5bda03fb5a1d8aff968098.jpg', category: 'blasters'
  },
  {
    id: '85', name: 'Grav-Wave Sound Harp', price: 749.99, rating: 4.9, image: 'https://i.pinimg.com/236x/08/4d/73/084d7391eb4da5edc3bd2d8384e63a4f.jpg', category: 'blasters'
  },
  {
    id: '86', name: 'Galactic Artifact Cube', price: 299.99, rating: 4.7, image: 'https://i.pinimg.com/236x/cb/37/54/cb3754e378e588640371766c2c5c0453.jpg', category: 'blasters'
  },
  {
    id: '87', name: 'Holocron Chessboard', price: 199.99, rating: 4.5, image: 'https://i.pinimg.com/236x/20/cf/f0/20cff0f2ac42bc2dc19ef4635266c8d8.jpg', category: 'blasters'
  },
  {
    id: '88', name: 'Plasma Prism', price: 349.99, rating: 4.6, image: 'https://i.pinimg.com/474x/33/56/bd/3356bdaa52c45001adcae2c23fe30a0e.jpg', category: 'blasters'
  },
  {
    id: '89', name: 'X-Wing Replica Model', price: 699.99, rating: 4.8, image: 'https://i.pinimg.com/474x/7d/e5/44/7de544182e94f473a9008515d475c604.jpg', category: 'blasters'
  },
  {
    id: '90', name: 'Asteroid Field Sculptures', price: 159.99, rating: 4.4, image: 'https://i.pinimg.com/236x/85/7c/0d/857c0d678be07b07c74a9efd8ab767bb.jpg', category: 'blasters'
  },  
  { 
    id: '91', name: 'Xeno Signal Decoder', price: 1199.99, rating: 4.9, image: 'https://i.pinimg.com/736x/d2/88/b3/d288b306f8ff37543bdbc5f653896a07.jpg', category: 'helmets' 
  },
  { 
    id: '92', name: 'Quantum Ray Filter', price: 449.99, rating: 4.8, image: 'https://i.pinimg.com/736x/4b/01/2f/4b012fb9e547a431909153b4660972b2.jpg', category: 'helmets' 
  },
  { 
    id: '93', name: 'Galactic Glowstick', price: 19.99, rating: 4.1, image: 'https://i.pinimg.com/736x/ba/17/30/ba17305517ff37d1c8c2a88bf42134a5.jpg', category: 'helmets' 
  },
  { 
    id: '94', name: 'Nova Timepiece', price: 79.99, rating: 4.3, image: 'https://i.pinimg.com/736x/aa/7d/f3/aa7df37303950434227d9d12309dba9b.jpg', category: 'helmets' 
  },
  { 
    id: '95', name: 'Supernova Sphere', price: 499.99, rating: 5.0, image: 'https://i.pinimg.com/736x/d3/14/56/d3145601094562e6847c0b61f4b82b4d.jpg', category: 'helmets' 
  },
  { 
    id: '96', name: 'Hyperdrive Compass', price: 249.99, rating: 4.7, image: 'https://i.pinimg.com/736x/d1/46/81/d146817927b542bac1ada5c143291d41.jpg', category: 'helmets' 
  },
  { 
    id: '97', name: 'Black Hole Globe', price: 99.99, rating: 4.6, image: 'https://i.pinimg.com/736x/32/75/0f/32750f545590eafa913fcaed3ce3a45c.jpg', category: 'helmets' 
  },
  { 
    id: '98', name: 'Exo Nightlight', price: 39.99, rating: 4.2, image: 'https://i.pinimg.com/736x/a8/04/7f/a8047f70bb64bf7645c6d81f51b99e1e.jpg', category: 'helmets' 
  },
  { 
    id: '99', name: 'Starship Engineering Kit', price: 2499.99, rating: 5.0, image: 'https://i.pinimg.com/736x/c0/ee/55/c0ee559d55e45a0ce1cb05c871c8e936.jpg', category: 'helmets' 
  },
  { 
    id: '100', name: 'Nebula Vortex Vase', price: 59.99, rating: 4.3, image: 'https://i.pinimg.com/236x/4a/61/43/4a6143cae3e3bf7c3803e91c96bdda31.jpg', category: 'helmets' 
  },
  { 
    id: '101', name: 'Xenon Signal Receiver', price: 1299.99, rating: 4.8, image: 'https://i.pinimg.com/236x/7e/39/01/7e39018edccec531760165adcc42fa5b.jpg', category: 'helmets' 
  },
  { 
    id: '102', name: 'Meteorite Keychain', price: 49.99, rating: 4.5, image: 'https://i.pinimg.com/236x/06/55/4c/06554c59137cb7f1ae98dd42018f1d6d.jpg', category: 'helmets' 
  },
  { 
    id: '103', name: 'Stellar Tapestry', price: 89.99, rating: 4.3, image: 'https://i.pinimg.com/736x/c6/8a/3f/c68a3f533ef67f7ba172cf98aa08ab69.jpg', category: 'helmets' 
  },
  { 
    id: '104', name: 'Graviton Flux Generator', price: 1899.99, rating: 4.9, image: 'https://i.pinimg.com/236x/25/f3/7d/25f37d20337db0106fa19b8de39b48ba.jpg', category: 'helmets' 
  },
  { 
    id: '105', name: 'Nebula Dust Pendant', price: 119.99, rating: 4.6, image: 'https://i.pinimg.com/236x/ae/94/93/ae9493b1b937eba8322a81812911bb09.jpg', category: 'helmets' 
  },
  { 
    id: '106', name: 'Lunar Eclipse ', price: 59.99, rating: 4.2, image: 'https://i.pinimg.com/736x/43/e5/3f/43e53f908fc054d2e83cf5da0c893c04.jpg', category: 'helmets' 
  },
  { 
    id: '107', name: 'Quantum Viewer', price: 1499.99, rating: 4.8, image: 'https://i.pinimg.com/236x/81/75/d8/8175d8fceeaaed74d19ade3d14345166.jpg', category: 'helmets' 
  },
  { 
    id: '108', name: 'Starlight Collector', price: 129.99, rating: 4.5, image: 'https://i.pinimg.com/736x/fa/01/84/fa018471b97e596880c19b7abf66442b.jpg', category: 'helmets' 
  },
  { 
    id: '109', name: 'Asteroid Core Sample', price: 799.99, rating: 4.7, image: 'https://i.pinimg.com/236x/06/1b/1a/061b1af8cddc25c241253bd2da18a377.jpg', category: 'helmets' 
  },
  { 
    id: '110', name: 'Solar Flare Lantern', price: 129.99, rating: 4.4, image: 'https://i.pinimg.com/736x/2f/80/ca/2f80cae11b7b562898d43055ffbbaeb1.jpg', category: 'helmets' 
  },
  { 
    id: '111', name: 'Photon Energy Collector', price: 1799.99, rating: 4.9, image: 'https://i.pinimg.com/236x/6d/83/8f/6d838f117d2130f8bb0d66f36f40ef65.jpg', category: 'helmets' 
  },
  { 
    id: '112', name: 'Galactic Egg Repository', price: 199.99, rating: 4.6, image: 'https://i.pinimg.com/236x/14/1a/9c/141a9c871b248334ad5f87c1e122c3ef.jpg', category: 'helmets' 
  },
  { 
    id: '113', name: 'Space Frontier Poster', price: 19.99, rating: 4.2, image: 'https://i.pinimg.com/236x/e7/65/d6/e765d635cc1376b5cb3ceba77733143f.jpg', category: 'helmets' 
  },
  { 
    id: '114', name: 'Time Warp Ring', price: 999.99, rating: 4.8, image: 'https://i.pinimg.com/236x/e9/78/40/e97840a37d9190356f9c99d35aaea10c.jpg', category: 'helmets' 
  },
  { 
    id: '115', name: 'Proxima Star ', price: 24.99, rating: 4.3, image: 'https://i.pinimg.com/236x/79/d9/39/79d939f96836506d65ddfd8f0b15a8b2.jpg', category: 'helmets' 
  },
  { 
    id: '116', name: 'Cosmic Puzzle ', price: 39.99, rating: 4.1, image: 'https://i.pinimg.com/236x/b9/ef/88/b9ef88c5533811715b32bfeda68224fb.jpg', category: 'helmets' 
  },
  { 
    id: '117', name: 'Zero-G Orb', price: 649.99, rating: 4.8, image: 'https://i.pinimg.com/236x/63/79/3f/63793fa9f24663ecbadcf53a10ab622e.jpg', category: 'helmets' 
  },
  { 
    id: '118', name: 'Light Year Beacon', price: 219.99, rating: 4.6, image: 'https://i.pinimg.com/236x/52/8f/53/528f53c8457766cd5505dbe68222e741.jpg', category: 'helmets' 
  },
  { 
    id: '119', name: 'Nova Core Fragment', price: 1299.99, rating: 4.9, image: 'https://i.pinimg.com/236x/2a/f3/66/2af366cf152ee9f6ee9093f8ef09d5aa.jpg', category: 'helmets' 
  },
  { 
    id: '120', name: 'Stellar Curtain Panels', price: 79.99, rating: 4.3, image: 'https://i.pinimg.com/236x/79/d2/5c/79d25c7523d3ba87c4d33141c33e57e3.jpg', category: 'helmets' 
  },
  { 
    id: '121', name: 'Alien Linguistic Decoder', price: 1499.99, rating: 4.8, image: 'https://i.pinimg.com/236x/3e/00/0f/3e000f039540c282c6045f37644dbae6.jpg', category: 'helmets' 
  },
  { 
    id: '122', name: 'Lunar Crescent Pendant', price: 109.99, rating: 4.5, image: 'https://i.pinimg.com/474x/d6/bc/f7/d6bcf7bd61bcb501f17a0d77d97fb85d.jpg', category: 'helmets' 
  },
  { 
    id: '123', name: 'Exoplanet Mug', price: 29.99, rating: 4.3, image: 'https://i.pinimg.com/236x/3a/d9/fb/3ad9fbf46cbea5446dd97dc2ded1b8f6.jpg', category: 'helmets' 
  },
  { 
    id: '124', name: 'Dark Matter Sphere', price: 999.99, rating: 4.9, image: 'https://i.pinimg.com/474x/47/1b/07/471b076017024c7396546672d34f5d6e.jpg', category: 'helmets' 
  },
  { 
    id: '125', name: 'Nebula Clock Projection', price: 119.99, rating: 4.4, image: 'https://i.pinimg.com/236x/d1/ac/6a/d1ac6a9a98ed87b8b082a3963549fc72.jpg', category: 'helmets' 
  },
  { 
    id: '126', name: 'Stellar Ring Fragment', price: 89.99, rating: 4.5, image: 'https://i.pinimg.com/236x/78/c5/00/78c5000e48b68ae217d093619178d4c7.jpg', category: 'helmets' 
  },
  { 
    id: '127', name: 'Galactic Rug', price: 159.99, rating: 4.6, image: 'https://i.pinimg.com/474x/73/e8/ea/73e8eaaf3fc2cbb1e8486b297225b289.jpg', category: 'helmets' 
  },
  { 
    id: '128', name: 'Anti-Gravity ', price: 199.99, rating: 4.7, image: 'https://i.pinimg.com/236x/05/0b/26/050b262f4c41302bb9e28b722bb56107.jpg', category: 'helmets' 
  },
  { 
    id: '129', name: 'Droid Security ', price: 24.99, rating: 4.2, image: 'https://i.pinimg.com/236x/82/23/8b/82238b327bf93188ac1948ad97ff4b42.jpg', category: 'helmets' 
  },
  { 
    id: '130', name: 'Solar Pulse Bracelet', price: 99.99, rating: 4.4, image: 'https://i.pinimg.com/474x/55/f8/a6/55f8a67a742b81918b4219faaaf82b0a.jpg', category: 'helmets' 
  },
  { 
    id: '131', name: 'Imperial X-Wing Goggles', price: 349.99, rating: 4.7, image: 'https://i.pinimg.com/474x/65/85/69/658569e5a04ed529f00833bdce029b67.jpg', category: 'helmets' 
  },
  { 
    id: '132', name: 'Dark Matter Boots', price: 799.99, rating: 4.8, image: 'https://i.pinimg.com/474x/cc/19/70/cc19707f3e2b90aa0d1b2da3537147d8.jpg', category: 'helmets' 
  },
  { 
    id: '133', name: 'HyperSpace Goggles', price: 399.99, rating: 4.9, image: 'https://i.pinimg.com/474x/47/5d/f6/475df699a1a4fcaea6615906b32fdf15.jpg', category: 'helmets' 
  },
  { 
    id: '134', name: 'Cybernetic Mask', price: 799.99, rating: 4.7, image: 'https://i.pinimg.com/474x/aa/96/92/aa9692ebc9fe58ac4e831ae3a9fae8ca.jpg', category: 'helmets' 
  },
  { 
    id: '135', name: 'Quantum Armor Set', price: 2499.99, rating: 5.0, image: 'https://i.pinimg.com/474x/a8/35/32/a83532ce872f8879b5aba3b322f2b28f.jpg', category: 'helmets' 
  },  
  { 
    id: '136', name: 'TIE Fighter Mark II', price: 1299.99, rating: 3.7, image: 'https://i.pinimg.com/736x/d6/df/5b/d6df5bdc8018ffb8cf8ec0e14bb992a2.jpg', category: 'ships' 
  },
  { 
    id: '137', name: 'Fremen Ascendant', price: 1799.99, rating: 2.9, image: 'https://i.pinimg.com/474x/30/40/41/304041e0bbe4014945836894b9291269.jpg', category: 'ships' 
  },
  { 
    id: '138', name: 'Wookiee Starcruiser', price: 3349.99, rating: 4.5, image: 'https://i.pinimg.com/474x/1b/95/60/1b95602ef7d43ced254bc7ea556311c8.jpg', category: 'ships' 
  },
  { 
    id: '139', name: 'Harkonnen Destroyer', price: 2499.99, rating: 2.8, image: 'https://i.pinimg.com/474x/c4/1f/1e/c41f1ec38beb963cd25f68f926ef8b4f.jpg', category: 'ships' 
  },
  { 
    id: '140', name: 'Skywalker Phantom', price: 4419.99, rating: 4.2, image: 'https://i.pinimg.com/736x/cb/00/63/cb00638fb742656da1d97c3bed8b7555.jpg', category: 'ships' 
  },
  { 
    id: '141', name: 'Shai-Hulud Sandcrawler', price: 1299.99, rating: 5.0, image: 'https://i.pinimg.com/736x/2f/ce/4c/2fce4ca9637a6975518e9a299f12946d.jpg', category: 'ships' 
  },
  { 
    id: '142', name: 'Ewok Scout Vessel', price: 1129.99, rating: 4.4, image: 'https://i.pinimg.com/736x/0a/31/3d/0a313de229f71d6ac760a54908cc1b1e.jpg', category: 'ships' 
  },
  { 
    id: '143', name: 'Arrakis Moonliner', price: 239.99, rating: 4.1, image: 'https://i.pinimg.com/736x/47/d6/83/47d683f86f70dcf16ae9b33f0249ec00.jpg', category: 'ships' 
  },
  { 
    id: '144', name: 'Jedi Starfighter', price: 3149.99, rating: 4.6, image: 'https://i.pinimg.com/736x/66/58/8e/66588e0fde2411aa259d86126a03012d.jpg', category: 'ships' 
  },
  { 
    id: '145', name: 'Sietch Orbital Fleet', price: 3219.99, rating: 4.8, image: 'https://i.pinimg.com/474x/fc/0e/ab/fc0eab69a9866721eb1987e9aa491687.jpg', category: 'ships' 
  },
  { 
    id: '146', name: 'Boba Fett’s Razor', price: 2239.99, rating: 2.3, image: 'https://i.pinimg.com/474x/a7/4a/b1/a74ab1b4a6e342447f4d609656f32fb5.jpg', category: 'ships' 
  },
  { 
    id: '147', name: 'Dune Seeker', price: 1179.99, rating: 2.6, image: 'https://i.pinimg.com/474x/68/42/ba/6842ba162f9df54848784e1ddfa86530.jpg', category: 'ships' 
  },
  { 
    id: '148', name: 'Tatooine Ranger', price: 1199.99, rating: 5.0, image: 'https://i.pinimg.com/474x/11/b4/cc/11b4cc8e1564d62cce3d938c567e447a.jpg', category: 'ships' 
  },
  { 
    id: '149', name: 'Landsraad Dune Walker', price: 12399.99, rating: 4.7, image: 'https://i.pinimg.com/474x/b6/f5/a6/b6f5a610e6e9db9eab29fd186125e600.jpg', category: 'ships' 
  },
  { 
    id: '150', name: 'Yavin Vortex', price: 4459.99, rating: 4.4, image: 'https://i.pinimg.com/474x/27/97/de/2797de0da32a1da1d7fdd749a909de0c.jpg', category: 'ships' 
  },
  { 
    id: '151', name: 'Desert Nomad Starcruiser', price: 3359.99, rating: 3.4, image: 'https://i.pinimg.com/474x/6f/55/b4/6f55b4cb10cce74e8795b01f86c06d09.jpg', category: 'ships' 
  },
  { 
    id: '152', name: 'Vader’s Shadow', price: 2359.99, rating: 4.4, image: 'https://i.pinimg.com/474x/2c/77/85/2c77853d4bfd5a863685cb34115d0a8e.jpg', category: 'ships' 
  },
  { 
    id: '153', name: 'Fremen Stormrider', price: 1999.99, rating: 4.8, image: 'https://i.pinimg.com/474x/f3/bb/05/f3bb05f2a12df5322972453f0727c689.jpg', category: 'ships' 
  },
  { 
    id: '154', name: 'Rebel Vanguard', price: 1299.99, rating: 4.7, image: 'https://i.pinimg.com/474x/e1/83/74/e183744e61e818ad36ad03c8d6eda0c1.jpg', category: 'ships' 
  },
  { 
    id: '155', name: 'Atreides Lancer', price: 799.99, rating: 3.5, image: 'https://i.pinimg.com/474x/ca/3f/e8/ca3fe8d9bb1626e353214709be30ea57.jpg', category: 'ships' 
  },
  { 
    id: '156', name: 'Jabba’s Barge', price: 2499.99, rating: 4.9, image: 'https://i.pinimg.com/474x/35/40/df/3540df8155e215176acc211f9a6b233f.jpg', category: 'ships' 
  },
  { 
    id: '157', name: 'Sarlacc Hunter', price: 3499.99, rating: 5.0, image: 'https://i.pinimg.com/474x/94/3a/d2/943ad2a2b54b85d90438e68beae88f29.jpg', category: 'ships' 
  },
  { 
    id: '158', name: 'Leto II Royal Cruiser', price: 4999.99, rating: 4.8, image: 'https://i.pinimg.com/474x/eb/ae/f5/ebaef5459527e140953c093767b0024f.jpg', category: 'ships' 
  },
  { 
    id: '159', name: 'Hutt Cartel Battleship', price: 7999.99, rating: 4.9, image: 'https://i.pinimg.com/474x/bf/34/ba/bf34ba5705840b0e1e26219ca90e2b66.jpg', category: 'ships' 
  },  
  { 
    id: '160', name: 'Stellar Shuttle', price: 899.99, rating: 2.6, image: 'https://i.pinimg.com/474x/53/60/97/53609747c272af5513089eea7ce06248.jpg', category: 'ships' 
  },
  { 
    id: '161', name: 'Moonliner', price: 1999.99, rating: 4.7, image: 'https://i.pinimg.com/474x/31/df/c0/31dfc02b9c3f18b20fbe2747bb7253a1.jpg', category: 'ships' 
  },
  { 
    id: '162', name: 'Comet Cruiser', price: 1799.99, rating: 4.5, image: 'https://i.pinimg.com/474x/eb/9e/a5/eb9ea5d840bc2ec777ccc1e841f79165.jpg', category: 'ships' 
  },
  { 
    id: '163', name: 'Astrofreighter', price: 2199.99, rating: 4.8, image: 'https://i.pinimg.com/474x/54/3f/eb/543feb09e4437e6fabdee8656605fd4e.jpg', category: 'ships' 
  },
  { 
    id: '164', name: 'Starfighter Mk II', price: 1499.99, rating: 4.6, image: 'https://i.pinimg.com/474x/92/aa/03/92aa036031d22a5078a1345d5b291745.jpg', category: 'ships' 
  },
  { 
    id: '165', name: 'Solar Wind Sloop', price: 1399.99, rating: 4.4, image: 'https://i.pinimg.com/474x/53/64/10/536410097aed3925ce3cd72c5c1090cf.jpg', category: 'ships' 
  },
  { 
    id: '166', name: 'Space Harrier', price: 2499.99, rating: 4.7, image: 'https://i.pinimg.com/474x/43/9f/1c/439f1c85ae5524bdc6e89cbba72a1b85.jpg', category: 'ships' 
  },
  { 
    id: '167', name: 'Galactic Raider', price: 2899.99, rating: 5.0, image: 'https://i.pinimg.com/474x/e5/f0/6d/e5f06d85b875264db55ccf4dcf37259b.jpg', category: 'ships' 
  },
  { 
    id: '168', name: 'Photon Raider', price: 1599.99, rating: 4.5, image: 'https://i.pinimg.com/474x/50/c7/3d/50c73dc70043a1a09bf62fa6bee975f6.jpg', category: 'ships' 
  },
  { 
    id: '169', name: 'Moonshot Cruiser', price: 3499.99, rating: 4.8, image: 'https://i.pinimg.com/474x/d6/7e/80/d67e808609f2313d19195037a22a4a0c.jpg', category: 'ships' 
  },
  { 
    id: '170', name: 'Star Seeker', price: 2799.99, rating: 4.9, image: 'https://i.pinimg.com/736x/88/04/99/8804990c5dea9e5596d2868798f37006.jpg', category: 'ships' 
  },
  { 
    id: '171', name: 'Void Reaper', price: 4999.99, rating: 5.0, image: 'https://i.pinimg.com/474x/3c/19/cb/3c19cbf7db288118fd7fc4f87d663c7f.jpg', category: 'ships' 
  },
  { 
    id: '172', name: 'Astro Explorer', price: 1199.99, rating: 4.4, image: 'https://i.pinimg.com/474x/cc/49/2b/cc492b46c2d7585e6acad6b4e77b2ef6.jpg', category: 'ships' 
  },
  { 
    id: '173', name: 'Nebula Raider', price: 1699.99, rating: 4.6, image: 'https://i.pinimg.com/474x/de/6e/69/de6e69126149aa8cf8ee7d196b6d43c3.jpg', category: 'ships' 
  },
  { 
    id: '174', name: 'Celestial Voyager', price: 4599.99, rating: 4.8, image: 'https://i.pinimg.com/474x/68/0d/90/680d90fa54ba700ce97f157b5a21dfed.jpg', category: 'ships' 
  },
  { 
    id: '175', name: 'Eclipse Starfighter', price: 1999.99, rating: 4.7, image: 'https://i.pinimg.com/474x/72/1e/09/721e09bf058cb9736692c79755b2f0f9.jpg', category: 'ships' 
  },
  { 
    id: '176', name: 'Black Hole Cruiser', price: 3999.99, rating: 4.9, image: 'https://i.pinimg.com/474x/cb/9e/ae/cb9eae4ea4ef41b13a7fe168b7c48766.jpg', category: 'ships' 
  },
  { 
    id: '177', name: 'Warpstream Freighter', price: 2499.99, rating: 4.6, image: 'https://i.pinimg.com/474x/5d/38/15/5d3815797a603961a0f7173caa3126b9.jpg', category: 'ships' 
  },
  { 
    id: '178', name: 'Cosmic Interceptor', price: 2899.99, rating: 5.0, image: 'https://i.pinimg.com/474x/4f/35/0b/4f350b1f0fac8cccce725907b2832ba0.jpg', category: 'ships' 
  },
  { 
    id: '179', name: 'Redshift Corvette', price: 1599.99, rating: 4.5, image: 'https://i.pinimg.com/474x/9d/15/14/9d15140614e6b61534cc1cad6a5e8d1f.jpg', category: 'ships' 
  },
  { 
    id: '180', name: 'Star Voyager Mk III', price: 4999.99, rating: 4.8, image: 'https://i.pinimg.com/474x/36/7f/2c/367f2ca6d662c1717bd54e22e2a6998d.jpg', category: 'ships' 
  },
  { 
    id: '181', name: 'Lunar Globe', price: 89.99, rating: 4.7, image: 'https://i.pinimg.com/474x/d7/49/c4/d749c4a64888720820d9aecb167b325f.jpg', category: 'decor' 
  },
  { 
    id: '182', name: 'Cosmic Wall Art', price: 149.99, rating: 4.8, image: 'https://i.pinimg.com/736x/82/fa/34/82fa34ba3943fd8ab040c0a84b839f97.jpg', category: 'decor' 
  },
  { 
    id: '183', name: 'Nebula Lamp', price: 119.99, rating: 4.6, image: 'https://i.pinimg.com/474x/bb/26/69/bb266948a1a8a81d43a098cc8eae321e.jpg', category: 'decor' 
  },
  { 
    id: '184', name: 'Astro Planter', price: 39.99, rating: 4.5, image: 'https://i.pinimg.com/474x/5a/3e/68/5a3e681b7f33f3a90b3c3db3d8344994.jpg', category: 'decor' 
  },
  { 
    id: '185', name: 'Stellar Clock', price: 129.99, rating: 4.9, image: 'https://i.pinimg.com/474x/f0/4e/e6/f04ee6cac9af997962f6c1e6bf08e8df.jpg', category: 'decor' 
  },
  { 
    id: '186', name: 'Galaxy Tapestry', price: 69.99, rating: 4.4, image: 'https://i.pinimg.com/474x/88/73/f9/8873f9c5c36ae7198a424a786a431ff7.jpg', category: 'decor' 
  },
  { 
    id: '187', name: 'Meteorite Shelf', price: 179.99, rating: 4.8, image: 'https://i.pinimg.com/474x/95/ca/a2/95caa240e08231287e2d0684eac23eef.jpg', category: 'decor' 
  },
  { 
    id: '188', name: 'Solar System Globe', price: 249.99, rating: 4.7, image: 'https://i.pinimg.com/474x/16/75/fc/1675fc76d81f7c3dcde876ce942d8944.jpg', category: 'decor' 
  },
  { 
    id: '189', name: 'Starry Night Canvas', price: 99.99, rating: 4.6, image: 'https://i.pinimg.com/474x/84/9c/37/849c37b305c7af1483df9e019be092eb.jpg', category: 'decor' 
  },
  { 
    id: '190', name: 'Astronaut Statue', price: 159.99, rating: 4.8, image: 'https://i.pinimg.com/474x/d5/c8/a1/d5c8a1239131028efa1dd31f78c2974f.jpg', category: 'decor' 
  },
  { 
    id: '191', name: 'Cosmic Vases', price: 79.99, rating: 4.5, image: 'https://i.pinimg.com/474x/ab/f1/d5/abf1d56f8d5002aec58f1c2b9cb8617a.jpg', category: 'decor' 
  },
  { 
    id: '192', name: 'Moon night', price: 69.99, rating: 4.6, image: 'https://i.pinimg.com/736x/f4/4d/1b/f44d1bc9a4f7ec9b8156850b2b474b64.jpg', category: 'decor' 
  },
  { 
    id: '193', name: 'Hubble Telescope Model', price: 249.99, rating: 4.9, image: 'https://i.pinimg.com/474x/de/f2/59/def25936895475049453693364c77697.jpg', category: 'decor' 
  },
  { 
    id: '194', name: 'Galactic Map', price: 199.99, rating: 4.7, image: 'https://i.pinimg.com/474x/a6/83/23/a68323652cb6a0b0cd33f0874736c043.jpg', category: 'decor' 
  },
  { 
    id: '195', name: 'Starship Coasters', price: 29.99, rating: 4.4, image: 'https://i.pinimg.com/474x/fd/b5/12/fdb51217d3199198fa4f4832b619f2d2.jpg', category: 'decor' 
  },
  { 
    id: '196', name: 'Alien Figurine', price: 89.99, rating: 4.6, image: 'https://i.pinimg.com/474x/9c/bb/89/9cbb89bb9034abcda792d7a18bcc5ef5.jpg', category: 'decor' 
  },
  { 
    id: '197', name: 'Meteorite Lamp', price: 139.99, rating: 4.8, image: 'https://i.pinimg.com/474x/13/0f/f0/130ff0fc5cfbd2daf1a38f7d03f549db.jpg', category: 'decor' 
  },
  { 
    id: '198', name: 'Galaxy Mirror', price: 179.99, rating: 4.7, image: 'https://i.pinimg.com/474x/b6/9b/22/b69b222968c45972660390643240d0a3.jpg', category: 'decor' 
  },
  { 
    id: '199', name: 'Comet Wall Sticker', price: 19.99, rating: 4.5, image: 'https://i.pinimg.com/474x/5e/47/12/5e4712ac7b42ce9d5909ff8f48478066.jpg', category: 'decor' 
  },
  { 
    id: '200', name: 'Astral Pillow Set', price: 49.99, rating: 4.6, image: 'https://i.pinimg.com/736x/2b/e1/17/2be11740cba69024b7788442430e7c0f.jpg', category: 'decor' 
  },
  { 
    id: '201', name: 'Nebula Pendant', price: 49.99, rating: 4.7, image: 'https://i.pinimg.com/474x/b3/dd/0e/b3dd0e5ab8ac4db20682cbbee53ac74b.jpg', category: 'accessories' 
  },
  { 
    id: '202', name: 'Galaxy Bracelet', price: 29.99, rating: 4.6, image: 'https://i.pinimg.com/474x/72/3d/e8/723de8a22b9dd36852f7f7a8b21f3c24.jpg', category: 'accessories' 
  },
  { 
    id: '203', name: 'Starry Earrings', price: 19.99, rating: 4.5, image: 'https://i.pinimg.com/474x/28/fa/56/28fa56a79691c4c972a26eae3295a867.jpg', category: 'accessories' 
  },
  { 
    id: '204', name: 'Planetary Keychain', price: 14.99, rating: 4.8, image: 'https://i.pinimg.com/474x/c2/02/b9/c202b92f6f6237693874935daeb41e70.jpg', category: 'accessories' 
  },
  { 
    id: '205', name: 'Comet Ring', price: 39.99, rating: 4.7, image: 'https://i.pinimg.com/474x/e4/11/7b/e4117bb4645d3e901a9324ecb8e841aa.jpg', category: 'accessories' 
  },
  { 
    id: '206', name: 'Astronaut Watch', price: 199.99, rating: 4.9, image: 'https://i.pinimg.com/474x/3e/2a/ce/3e2ace7d081e18dccd263a135bb80ebd.jpg', category: 'accessories' 
  },
  { 
    id: '207', name: 'Lunar Charm', price: 24.99, rating: 4.6, image: 'https://i.pinimg.com/474x/db/13/1d/db131d5eedd179fa36e3ee8ee29a5eb7.jpg', category: 'accessories' 
  },
  { 
    id: '208', name: 'Cosmic Hairpins', price: 9.99, rating: 4.4, image: 'https://i.pinimg.com/474x/ed/cb/ac/edcbac4dc2cd53d796fab5cc69f367e2.jpg', category: 'accessories' 
  },
  { 
    id: '209', name: 'Solar Necklace', price: 59.99, rating: 4.7, image: 'https://i.pinimg.com/474x/5d/44/0e/5d440e2707a6bb6f309d153f1d187ff1.jpg', category: 'accessories' 
  },
  { 
    id: '210', name: 'Meteorite Brooch', price: 69.99, rating: 4.8, image: 'https://i.pinimg.com/474x/eb/02/81/eb028113bf3ed2d13aa6892a9c88894a.jpg', category: 'accessories' 
  },
  { 
    id: '211', name: 'Black Hole Ring', price: 89.99, rating: 4.9, image: 'https://i.pinimg.com/474x/d3/c5/99/d3c599cd3cb4500f31d31162f9d45fa7.jpg', category: 'accessories' 
  },
  { 
    id: '212', name: 'Stellar Backpack', price: 129.99, rating: 4.7, image: 'https://i.pinimg.com/736x/f3/8c/a5/f38ca5295f07fa55a29442ff47bbc02b.jpg', category: 'accessories' 
  },
  { 
    id: '213', name: 'Orbit Earrings', price: 19.99, rating: 4.5, image: 'https://i.pinimg.com/474x/0b/7f/8f/0b7f8fe6e88c6666c7058b9c39876999.jpg', category: 'accessories' 
  },
  { 
    id: '214', name: 'Galaxy Sunglasses', price: 49.99, rating: 4.6, image: 'https://i.pinimg.com/474x/41/15/ec/4115ec3fb0e9272666bffcd5c6cf60aa.jpg', category: 'accessories' 
  },
  { 
    id: '215', name: 'Supernova Wallet', price: 39.99, rating: 4.7, image: 'https://i.pinimg.com/474x/a0/e0/53/a0e0538e38afce44c19a51cc35558358.jpg', category: 'accessories' 
  },
  { 
    id: '216', name: 'Astro Cap', price: 24.99, rating: 4.4, image: 'https://i.pinimg.com/474x/cc/3d/65/cc3d65d87defff8dac36910e3c21c8e9.jpg', category: 'accessories' 
  },
  { 
    id: '217', name: 'Galactic Defender Gloves', price: 29.99, rating: 4.5, image: 'https://i.pinimg.com/474x/a6/a5/0f/a6a50f60a6c26af24e1314f7f6acbab3.jpg', category: 'accessories' 
  },
  { 
    id: '218', name: 'Sith Warrior Gauntlets', price: 79.99, rating: 4.8, image: 'https://i.pinimg.com/474x/a5/57/73/a557731f2302dd4a35a0e6d87f856bc6.jpg', category: 'accessories' 
  },
  { 
    id: '219', name: 'TIE Pilot Gloves', price: 12.99, rating: 4.4, image: 'https://i.pinimg.com/474x/b1/9e/7a/b19e7a75f58c9e1579d6f0aa8efd95a4.jpg', category: 'accessories' 
  },
  { 
    id: '220', name: 'Rebel Alliance Handguards', price: 59.99, rating: 4.7, image: 'https://i.pinimg.com/474x/e8/b7/21/e8b721e8b139efa0492a32eab9d139bc.jpg', category: 'accessories' 
  },
  { 
    id: '221', name: 'Force Wielder Mitts', price: 39.99, rating: 4.8, image: 'https://i.pinimg.com/474x/df/0b/e4/df0be4779e940caaeb73f31d460be6e1.jpg', category: 'accessories' 
  },
  { 
    id: '222', name: 'Hoth Survival Gloves', price: 49.99, rating: 4.6, image: 'https://i.pinimg.com/474x/48/79/fb/4879fbc4220417a93ec62038cb192c7e.jpg', category: 'accessories' 
  },
  { 
    id: '223', name: 'Jedi Battle Gauntlets', price: 99.99, rating: 4.9, image: 'https://i.pinimg.com/474x/f1/e7/8c/f1e78c1477b5ab7959fde5fbbe8eef27.jpg', category: 'accessories' 
  },
  { 
    id: '224', name: 'Astral Cufflinks', price: 29.99, rating: 4.7, image: 'https://i.pinimg.com/474x/da/ad/6a/daad6a18d24844c441836d7d33504686.jpg', category: 'accessories' 
  },
  { 
    id: '225', name: 'Lunar Earrings', price: 19.99, rating: 4.6, image: 'https://i.pinimg.com/474x/19/86/9d/19869d525a6ff957ed74c47374e9fdb8.jpg', category: 'accessories' 
  },
  { 
    id: '226', name: 'Cosmic Gloves', price: 39.99, rating: 4.7, image: 'https://i.pinimg.com/474x/a5/c2/8a/a5c28ad1bff0cb5649e8448075f4079e.jpg', category: 'accessories' 
  },
  { 
    id: '227', name: 'Solar Hat', price: 24.99, rating: 4.4, image: 'https://i.pinimg.com/474x/dc/4c/8b/dc4c8b8b4086ff8413e1265470650dac.jpg', category: 'accessories' 
  },
  { 
    id: '228', name: 'Star Pendant', price: 29.99, rating: 4.5, image: 'https://i.pinimg.com/474x/87/bd/ce/87bdce3191f12f205de210752d346979.jpg', category: 'accessories' 
  },
  { 
    id: '229', name: 'Comet Earrings', price: 19.99, rating: 4.6, image: 'https://i.pinimg.com/474x/08/47/b7/0847b77498253db0fd379201920ac6cc.jpg', category: 'accessories' 
  },
  { 
    id: '230', name: 'Meteorite Ring', price: 59.99, rating: 4.8, image: 'https://i.pinimg.com/474x/69/10/2d/69102df7bb40c257ef68207b8332beda.jpg', category: 'accessories' 
  },
  { 
    id: '231', name: 'Cosmic Watch', price: 199.99, rating: 4.9, image: 'https://i.pinimg.com/474x/18/ba/c9/18bac9897de5230aa79a457357044c53.jpg', category: 'accessories' 
  },
  { 
    id: '232', name: 'Starry Comb', price: 14.99, rating: 4.4, image: 'https://i.pinimg.com/474x/80/be/94/80be9437ff8563404c5b0d4507dd0a41.jpg', category: 'accessories' 
  },
  { 
    id: '233', name: 'Lunar Moon Pendant', price: 49.99, rating: 4.7, image: 'https://i.pinimg.com/474x/40/87/a6/4087a6fb2192b0462498c3c03f8e4e80.jpg', category: 'accessories' 
  },
  { 
    id: '234', name: 'Lunar Bracelet', price: 39.99, rating: 4.6, image: 'https://i.pinimg.com/474x/e2/cf/7c/e2cf7ce1c695b729d1732835fbd3a70b.jpg', category: 'accessories' 
  },
  { 
    id: '235', name: 'Snowflake Spark Earrings', price: 19.99, rating: 4.5, image: 'https://i.pinimg.com/474x/18/03/b4/1803b4bcd8ccc55eb27ce23078910744.jpg', category: 'new_year_drop_shifts' 
  },
  { 
    id: '236', name: 'Nebula Shield Glasses', price: 12.99, rating: 4.4, image: 'https://i.pinimg.com/474x/25/c2/22/25c2220b529db94f9b694b92c0ce8f48.jpg', category: 'accessories' 
  },
  { 
    id: '237', name: 'Hoth Ice Vision', price: 24.99, rating: 4.7, image: 'https://i.pinimg.com/474x/80/fb/61/80fb61351fb074a7fcc0a624dd477c25.jpg', category: 'accessories' 
  },
  { 
    id: '238', name: 'Tatooine Sunscreen Shades', price: 39.99, rating: 4.6, image: 'https://i.pinimg.com/736x/16/1f/7c/161f7ca1a1139923571b61bfb18f45e1.jpg', category: 'accessories' 
  },
  { 
    id: '239', name: 'Galactic Pilot Goggles', price: 9.99, rating: 4.5, image: 'https://i.pinimg.com/474x/23/24/2c/23242cb5ef5ac19b8a94616e14f5d61b.jpg', category: 'accessories' 
  },
  { 
    id: '240', name: 'Dark Side Vision', price: 19.99, rating: 4.8, image: 'https://i.pinimg.com/474x/8e/5e/94/8e5e94e9bd769c1680b728c7f350e364.jpg', category: 'new_year_drop_shifts' 
  },
  { 
    id: '241', name: 'Aurora Glow ', price: 39.99, rating: 4.7, image: 'https://i.pinimg.com/474x/bc/ae/27/bcae277c5b509af630bac5ae2eacee06.jpg', category: 'new_year_drop_shifts'  
  },
  { 
    id: '242', name: 'Starlight Crystal ', price: 59.99, rating: 4.9, image: 'https://i.pinimg.com/474x/c9/cd/54/c9cd544656024367a1b081cdccc806b1.jpg', category: 'new_year_drop_shifts' 
  },
  { 
    id: '243', name: 'Frosted Lunar ', price: 14.99, rating: 4.4, image: 'https://i.pinimg.com/474x/3f/92/7d/3f927d961a8834cf4386e7eb92eec1cd.jpg', category: 'new_year_drop_shifts'  
  },
  { 
    id: '244', name: 'Glacial Nebula ', price: 49.99, rating: 4.6, image: 'https://i.pinimg.com/474x/a1/10/9b/a1109bb7fc31e061c77ec55089b0fc31.jpg', category: 'new_year_drop_shifts' 
  },
  { 
    id: '245', name: 'Holiday Star ', price: 29.99, rating: 4.5, image: 'https://i.pinimg.com/474x/d3/41/02/d34102ca86c389e7631c1169f83b41a0.jpg', category: 'new_year_drop_shifts' 
  },
  { 
    id: '246', name: 'Icicle Orbit ', price: 19.99, rating: 4.6, image: 'https://i.pinimg.com/474x/df/c0/8b/dfc08badf9d9a1fa31f1a4234f80c63e.jpg', category: 'new_year_drop_shifts' 
  },
  { 
    id: '247', name: 'Winter Galaxy ', price: 39.99, rating: 4.8, image: 'https://i.pinimg.com/474x/77/3d/f3/773df3e900b7d44d34985f9266c7ab92.jpg', category: 'new_year_drop_shifts' 
  },
  { 
    id: '248', name: 'Snowy Astral ', price: 9.99, rating: 4.4, image: 'https://i.pinimg.com/474x/2e/2e/7c/2e2e7c35387a8b4cc894a8cb4a65bd48.jpg', category: 'new_year_drop_shifts' 
  },
  { 
    id: '249', name: 'Polar Cosmic ', price: 14.99, rating: 4.6, image: 'https://i.pinimg.com/474x/d1/02/f5/d102f5440b640a808757237a75d993ad.jpg', category: 'new_year_drop_shifts'  
  },
  { 
    id: '250', name: 'Arctic Glow Sunglasses', price: 49.99, rating: 4.9, image: 'https://i.pinimg.com/474x/79/cb/e8/79cbe8de3869c7d56cdf923ef4e320a4.jpg', category: 'new_year_drop_shifts' 
  }
] as const;

export const mutableFeaturedProducts = FEATURED_PRODUCTS.map((p) => ({ ...p }));