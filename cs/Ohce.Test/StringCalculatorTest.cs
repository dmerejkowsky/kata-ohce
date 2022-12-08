namespace Ohce.Test;

public class StringCalculatorTest
{
    [Test]
    public void should_return_0_for_empty_strings()
    {
        var input = "";
        var result = StringCalculator.Add(input);
        Assert.That(result, Is.EqualTo(0));
    }

    [Test]
    public void should_return_input_for_one_number()
    {
        var input = "42";
        var result = StringCalculator.Add(input);
        Assert.That(result, Is.EqualTo(42));
    }

    [Test]
    public void should_return_sum_for_number_separated_by_comma()
    {
        var input = "2,3";
        var result = StringCalculator.Add(input);
        Assert.That(result, Is.EqualTo(5));
    }

    [Test]
    public void should_add_several_numbers_separated_by_comma()
    {
        var input = "2,3,4";
        var result = StringCalculator.Add(input);
        Assert.That(result, Is.EqualTo(9));
    }

    [Test]
    public void should_handle_commas_and_newlines()
    {
        var input = "1\n2,3";
        var result = StringCalculator.Add(input);
        Assert.That(result, Is.EqualTo(6));
    }

    [Test]
    public void should_handle_delimitor_line()
    {
        var input = "//;\n1;2;3;4";
        var result = StringCalculator.Add(input);
        Assert.That(result, Is.EqualTo(10));
    }

    [Test]
    public void should_throw_when_getting_negative_numbers()
    {
        var input = "-1";
        Assert.Throws<ArgumentException>(() => StringCalculator.Add(input));
    }
}