
<?php

  include '../../connectDB.php';
  include '../../dbFunction.php';
  
  $data = receivePostData($_POST);

  $strSQL = "SELECT * FROM hr_user where id_user ='".$data['userId']."'";
    $objQuery = $conn->query($strSQL) or die (mysql_error());
    $result = array();
    while($row = $objQuery->fetch_assoc()) {

        $name_user =  $row['name_user'];

	}
?>

<?php
require('fpdf17/fpdf.php');

class PDF_JavaScript extends FPDF {

	protected $javascript;
	protected $n_js;

	function IncludeJS($script, $isUTF8=false) {
		if(!$isUTF8)
			$script=utf8_encode($script);
		$this->javascript=$script;
	}

	function _putjavascript() {
		$this->_newobj();
		$this->n_js=$this->n;
		$this->_put('<<');
		$this->_put('/Names [(EmbeddedJS) '.($this->n+1).' 0 R]');
		$this->_put('>>');
		$this->_put('endobj');
		$this->_newobj();
		$this->_put('<<');
		$this->_put('/S /JavaScript');
		$this->_put('/JS '.$this->_textstring($this->javascript));
		$this->_put('>>');
		$this->_put('endobj');
	}

	function _putresources() {
		parent::_putresources();
		if (!empty($this->javascript)) {
			$this->_putjavascript();
		}
	}

	function _putcatalog() {
		parent::_putcatalog();
		if (!empty($this->javascript)) {
			$this->_put('/Names <</JavaScript '.($this->n_js).' 0 R>>');
		}
	}
}





class PDF_AutoPrint extends PDF_JavaScript
{
	function AutoPrint($printer='')
	{
		// Open the print dialog
		if($printer)
		{
			$printer = str_replace('\\', '\\\\', $printer);
			$script = "var pp = getPrintParams();";
			$script .= "pp.interactive = pp.constants.interactionLevel.full;";
			$script .= "pp.printerName = '$printer'";
			$script .= "print(pp);";
		}
		else
			$script = 'print(true);';
		$this->IncludeJS($script);
	}
}

$pdf = new PDF_AutoPrint( 'P' , 'mm' , 'A4' );
$pdf->AddPage();
 $pdf->SetLeftMargin( 20 );
//$pdf=new FPDF( 'P' , 'mm' , 'A4' );


    




$pdf->AddFont('THSarabun','b','THSarabun Bold.php');//˹�
$pdf->SetFont('THSarabun','B',20);
$pdf->Text( 60 , 20 ,$name_user);


// $pdf->AddFont('THSarabun','b','THSarabun Bold.php');
// $pdf->SetFont('THSarabun','B',18);
// $pdf->Text( 80, 30 ,'��Ѻ����ʹ��� / �����ͧ���¹',0, 'L');
// $pdf->Ln(10);






$pdf->Ln(10);

$pdf->AutoPrint();

$pdf->Output();

?>