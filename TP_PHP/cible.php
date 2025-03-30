<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration Data Received</title>
    <style>
        body { 
            font-family: Arial, sans-serif; 
            line-height: 1.6; 
            margin: 0 auto; 
            max-width: 500px; 
            padding: 20px; 
        }
        h1, h2 {
            color: #333; 
            text-align: center; 
        }
        .form-group { 
            margin-bottom: 15px; 
        }
        label { 
            display: block; 
            margin-bottom: 5px; 
            font-weight: bold; 
        }
        input[type="text"], input[type="email"], input[type="password"], select, textarea {
            width: 100%; 
            padding: 8px; 
            border: 1px solid #ddd; 
            border-radius: 4px;
        }
        .data-display { 
            background-color: #f9f9f9; 
            padding: 15px; 
            border-radius: 5px; 
            margin-bottom: 20px;
        }
        .link {
            border: 1px solid #ddd;
            text-decoration  none;
            padding: 10px 15px;
            background-color: #4CAF50;
            color: white;
            border-radius: 4px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h1>Registration Data</h1>
    
    <div class="data-display">
        <h2>Your Submitted Data:</h2>
        <?php
        foreach ($_POST as $key => $value) {
            echo "<p><strong>" . htmlspecialchars($key) . ":</strong> " . htmlspecialchars($value) . "</p>";
        }
        ?>
    </div>
    
    <h2>Form with Filled Data:</h2>
    <form>
        <div class="form-group">
            <label for="firstname">First Name:</label>
            <input type="text" id="firstname" name="Firstname" value="<?php echo htmlspecialchars($_POST['Firstname'] ?? ''); ?>" readonly>
        </div>
        
        <div class="form-group">
            <label for="lastname">Last Name:</label>
            <input type="text" id="lastname" name="Lastname" value="<?php echo htmlspecialchars($_POST['Lastname'] ?? ''); ?>" readonly>
        </div>
        
        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="Email" value="<?php echo htmlspecialchars($_POST['Email'] ?? ''); ?>" readonly>
        </div>
        
        <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" name="Password" value="<?php echo htmlspecialchars($_POST['Password'] ?? ''); ?>" readonly>
        </div>
        
        <div class="form-group">
            <label for="gender">Gender:</label>
            <select id="gender" name="Gender" disabled>
                <option value="">Select</option>
                <option value="male" <?php echo (isset($_POST['Gender']) && $_POST['Gender'] == 'male') ? 'selected' : ''; ?>>Male</option>
                <option value="female" <?php echo (isset($_POST['Gender']) && $_POST['Gender'] == 'female') ? 'selected' : ''; ?>>Female</option>
            </select>
        </div>
        
        <div class="form-group">
            <label for="country">Country:</label>
            <input type="text" id="country" name="Country" value="<?php echo htmlspecialchars($_POST['Country'] ?? ''); ?>" readonly>
        </div>
        
        <div class="form-group">
            <label for="comments">Comments:</label>
            <textarea id="comments" name="Comments" rows="4" readonly><?php echo htmlspecialchars($_POST['Comments'] ?? ''); ?></textarea>
        </div>
    </form>
    
    <p><a href="index.php" class="link">Return to the form</a></p>
</body>
</html>