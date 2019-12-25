<?php

use Illuminate\Database\Seeder;
use App\Models\User;
use Carbon\Carbon;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = User::create([
            'name' => 'Admin',
            'email' => 'admin@amitgroup.vn',
            'email_verified_at' => Carbon::now(),
            'password' => bcrypt('123456')
        ]);
    }
}
