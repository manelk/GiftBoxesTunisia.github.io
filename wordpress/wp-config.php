<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'dg_mpdam' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'X m`,f9GLt@S0]Xp0c)VtU1^r6GJG}MndXrDvb}h()#?OvzO3znm8-p/@k*DRIas' );
define( 'SECURE_AUTH_KEY',  'EhFkZ&R_Y1hCdN-B:.tZY/O/T)PsU~)kqDWR,QP[PzIB*nH>E]vD8Uzo&8<$n&rZ' );
define( 'LOGGED_IN_KEY',    'S{[bNkc2tbt~^c+GV,3b}$KvGJhXuoa` -9[*!#]@8p(igb#x3P|~@Sa`;.7tNqL' );
define( 'NONCE_KEY',        'X1[@r.0BRdfi=}xT/:RNjqog}eZ+_-7}w<76w1fF@h>V~0] MIpU#;>I=Nlflc,9' );
define( 'AUTH_SALT',        '}V|8rRNm|W~r+B9F*c;+D@k*xMcGi^n-*1HlNj_(s%,,B*W#rYZQ[n^:v54r<PqJ' );
define( 'SECURE_AUTH_SALT', 'B52]?(nF;*HQrBtw$8v=K{:I!!*Nle~glp8^yHB!.]|Mc&LLJuR~-tX>/B0e_g0K' );
define( 'LOGGED_IN_SALT',   'vQE+f)k0@WE{mq5>Unt%N83b5Z.<K30{e@H,up^I8Mp#}ij*7U@ckQr}43|tX(@2' );
define( 'NONCE_SALT',       'oHydt~ZXm.k%<>VHhgg#]Rz!m~Lx0Qkd14N(Ou$._DgLx[&%dmZ.Q83pRqF@$G^}' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
