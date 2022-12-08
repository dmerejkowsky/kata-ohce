namespace Ohce;

public class NumberSplitter
{
    private string _input;
    private char? _delimiter = null;

    public NumberSplitter(string input)
    {
        _input = input;
    }

    public IEnumerable<int> Split()
    {
        if (_input.Equals(""))
        {
            return new[] { 0 };
        }

        var (deliminter, newInput) = ExtractDelimiterLine(_input);
        _input = newInput;
        _delimiter = deliminter;

        var res = new List<int>();
        var currentNumber = "";
        var number = 0;
        foreach (char c in _input)
        {
            if (IsDelimiter(c))
            {
                ParseAndAppend(res, currentNumber);
                currentNumber = "";
            }
            else
            {
                if (Char.IsDigit(c) || c == '-')
                {
                    currentNumber += c;
                }
                else
                {
                    throw new ArgumentException($"Expected digit but got '{c}'");
                }
            }
        }

        if (currentNumber.Equals(""))
        {
            throw new ArgumentException("Unfinished list");
        }

        number = ParseAndAppend(res, currentNumber);

        return res;
    }

    private bool IsDelimiter(char c)
    {
        if (_delimiter == null)
        {
            return c == ',' || c == '\n';
        }
        else
        {
            return c == _delimiter;
        }
    }

    private static int ParseAndAppend(List<int> res, string currentNumber)
    {
        int number = int.Parse(currentNumber);
        res.Add(number);
        return number;
    }

    public static (char?, string) ExtractDelimiterLine(string input)
    {
        if(input.StartsWith("//"))
        {
            CheckValidDelimiterLine(input);
            var delimiter = input[2];
            return (delimiter, input.Substring(4));

        }
        return (null, input);
    }

    public static void CheckValidDelimiterLine(string input)
    {
        if (input.Length < 4)
        {
            throw new ArgumentException("Delimiter line too short - should be exactly 4 characters");
        }
        var end = input[3];
        if (end != '\n')
        {
            throw new ArgumentException($"Expecting '\\n' at index 3 but got '{end}'");
        }
    }
}
