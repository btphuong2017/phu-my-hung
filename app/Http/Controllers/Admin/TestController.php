<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use SimpleSoftwareIO\QrCode\Facades\QrCode;

class TestController extends Controller
{
    public function test()
    {
        
        $qr = QrCode::format('png')->size(500)->margin(1)->encoding('UTF-8')->merge('\public\images\logo.png', 0.2)->generate('Nhân Thú Gián Thần', public_path('media/qrcode-test.png'));
        return view('admin.test', ['qrcode' => $qr]);
    }
}
