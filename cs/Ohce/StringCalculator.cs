namespace Ohce;

public class StringCalculator
{
    public static object Add(string numbers)
    {
        var ints = new NumberSplitter(numbers).Split();
        return ints.Sum();   
    }


    public static void Main(string[] args)
    {

    }
} 