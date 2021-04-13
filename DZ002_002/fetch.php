<?php
$connect = mysqli_connect("localhost", "id11438358_jure", "Fntdqpb4TCHAE}[D", "id11438358_northwind");
$output = '';
if(isset($_POST["query"]))
{
	$search = mysqli_real_escape_string($connect, $_POST["query"]);
	$query = "
	SELECT * FROM employees 
	WHERE FirstName LIKE '%".$search."%'
	OR LastName LIKE '%".$search."%' 
	
	";
}

$result = mysqli_query($connect, $query);
if(mysqli_num_rows($result) > 0)
{
	$output .= '<div class="table-responsive">
					<table class="table table bordered">
						<tr>
							<th>Name</th>
							<th>Last Name</th>
							
						</tr>';
	while($row = mysqli_fetch_array($result))
	{
		$output .= '
			<tr>
				<td>'.$row["FirstName"].'</td>
				<td>'.$row["LastName"].'</td>
				
			</tr>
		';
	}
	echo $output;
}
else
{
	echo 'Data Not Found';
}
?>