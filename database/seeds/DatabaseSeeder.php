<?php

use Illuminate\Database\Seeder;
use \UserSeeder as User;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            User::class
        ]);
    }
}
