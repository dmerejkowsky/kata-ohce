namespace Ohce.Test;

public class NumberSpliterTest
{
    [Test]
    public void empty_returns_0()
    {
        var result = new NumberSplitter("").Split();
        Assert.That(result, Is.EqualTo(new[] { 0 }));
    }

    [Test]
    public void parse_one_element()
    {
        var result = new NumberSplitter("42").Split();
        Assert.That(result, Is.EqualTo(new[] { 42 }));
    }

    [Test]
    public void parse_two_elements_separated_by_comma()
    {
        var result = new NumberSplitter("2,10").Split();
        Assert.That(result, Is.EqualTo(new[] { 2, 10 }));
    }

    [Test]
    public void parse_two_elements_separated_by_newline()
    {
        var result = new NumberSplitter("2\n10").Split();
        Assert.That(result, Is.EqualTo(new[] { 2, 10 }));
    }

    [Test]
    public void throws_when_invalid_chars()
    {
        Assert.Throws<ArgumentException>(() => new NumberSplitter("2a").Split());
    }

    [Test]
    public void throws_when_incomplete_list()
    {
        Assert.Throws<ArgumentException>(() => new NumberSplitter("1,").Split());
    }

    [Test]
    public void handle_delimiter_line()
    {
        var result = new NumberSplitter("//;\n1;2").Split();
        Assert.That(result, Is.EqualTo(new[] { 1, 2 }));
    }

    [Test]
    public void return_null_delimiter_when_no_delimiter_line()
    {
        var input = "1,2";
        var (delimiter, extracted) = NumberSplitter.ExtractDelimiterLine(input);
        Assert.That(delimiter, Is.Null);
        Assert.That(extracted, Is.EqualTo(input));
    }

    [Test]
    public void return_delimiter_when_delimiter_line_is_valid()
    {
        var input = "//;\n1;2";
        var (delimiter, extracted) = NumberSplitter.ExtractDelimiterLine(input);
        Assert.That(delimiter, Is.EqualTo(';'));
        Assert.That(extracted, Is.EqualTo("1;2"));
    }


    [Test]
    public void throws_when_delimiter_line_is_too_short()
    {
        Assert.Throws<ArgumentException>(() => NumberSplitter.ExtractDelimiterLine("//"));
    }

    [Test]
    public void throws_when_delimiter_line_does_not_end_with_newline()
    {
        Assert.Throws<ArgumentException>(() => NumberSplitter.ExtractDelimiterLine("//xy"));
    }
}


