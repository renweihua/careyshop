<?php
/**
 *--------------------------------------------------------------------
 *
 * Image Class to draw JPG images with possibility to set DPI
 *
 *--------------------------------------------------------------------
 * @author  Akhtar Khan <er.akhtarkhan@gmail.com>
 * @link http://www.codeitnow.in
 * @package https://github.com/codeitnowin/barcode-generator
 */
namespace CodeItNow\BarcodeBundle\Generator\Drawer;
use CodeItNow\BarcodeBundle\Generator\Drawer\CINDraw;

if (!function_exists('file_put_contents')) {
    function file_put_contents($filename, $data) {
        $f = @fopen($filename, 'w');
        if (!$f) {
            return false;
        } else {
            $bytes = fwrite($f, $data);
            fclose($f);
            return $bytes;
        }
    }
}

class CINDrawJPG extends CINDraw {
    private $dpi;
    private $quality;

    /**
     * Constructor.
     *
     * @param resource $im
     */
    public function __construct($im) {
        parent::__construct($im);
    }

    /**
     * Sets the DPI.
     *
     * @param int $dpi
     */
    public function setDPI($dpi) {
        if(is_int($dpi)) {
            $this->dpi = max(1, $dpi);
        } else {
            $this->dpi = null;
        }
    }

    /**
     * Sets the quality of the JPG.
     *
     * @param int $quality
     */
    public function setQuality($quality) {
        $this->quality = $quality;
    }

    /**
     * Draws the JPG on the screen or in a file.
     */
    public function draw() {
        ob_start();
        imagejpeg($this->im, null, $this->quality);
        $bin = ob_get_contents();
        ob_end_clean();

        $this->setInternalProperties($bin);

        if (empty($this->filename)) {
            echo $bin;
        } else {
            file_put_contents($this->filename, $bin);
        }
    }

    private function setInternalProperties(&$bin) {
        $this->internalSetDPI($bin);
        $this->internalSetC($bin);
    }

    private function internalSetDPI(&$bin) {
        if ($this->dpi !== null) {
            $bin = substr_replace($bin, pack("Cnn", 0x01, $this->dpi, $this->dpi), 13, 5);
        }
    }

    private function internalSetC(&$bin) {
        if(strcmp(substr($bin, 0, 4), pack('H*', 'FFD8FFE0')) === 0) {
            $offset = 4 + (ord($bin[4]) << 8 | ord($bin[5]));
            $firstPart = substr($bin, 0, $offset);
            $secondPart = substr($bin, $offset);
            $cr = pack('H*', '436F707972696768742028632920436172657953686F7020416C6C20726967687473207265736572766564204261736564206F6E20436172657953686F70');
            $bin = $firstPart;
            $bin .= $cr;
            $bin .= $secondPart;
        }
    }
}
?>