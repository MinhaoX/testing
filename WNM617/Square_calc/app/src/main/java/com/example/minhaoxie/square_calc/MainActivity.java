package com.example.minhaoxie.square_calc;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {
    Button squareBtn;
    EditText input1, input2;
    TextView resultView;
    int op1, op2, result;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        // step 2: hook up step

        squareBtn=(Button)findViewById(R.id.button);
        input1 = (EditText)findViewById(R.id.editText);
        resultView = (TextView)findViewById(R.id.textView2);


        squareBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                op1 = Integer.parseInt(input1.getText().toString());
                result = op1 * op1;
                resultView.setText(String.valueOf(result));
            }

        });



    }
}
