<?php
    $website_engine = "mysql";
    $host_website = "viaduct.proxy.rlwy.net";

    $website_port = 13782; 
    $website_bdd = "railway";
    $website_user = "root";
    $website_password = "adaAAbDDhEcg52Bef5E3cD2a6D3C351d";

    $website_dsn = "$website_engine:host=$host_website:$website_port;dbname=$website_bdd";
    $website_pdo = new PDO($website_dsn, $website_user, $website_password);
